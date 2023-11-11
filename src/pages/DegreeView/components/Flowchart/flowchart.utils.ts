import { Edge, XYPosition } from "react-flow-renderer";
import { Course } from "../../../../models/course";
import { Degree } from "../../../../models/degree";
import CourseNode, { CourseNodeProps } from "./CourseNode/coursenode.component";
import { v4 } from "uuid";
import {
  ApprovedElective1,
  ApprovedElective2,
  AreaElective2,
  BIOL,
  CSC1350,
  CSC1351,
  CSC2000Elective,
  CSC2000ElectiveSeg,
  CSC2259,
  CSC2262,
  CSC3000Elective,
  CSC3102,
  CSC3200,
  CSC3380,
  CSC3501,
  CSC4000Elective,
  CSC4101,
  CSC4103,
  CSC4330,
  CSC4351,
  CSC4402,
  ENGL1001,
  ENGL2000,
  GenEdArt,
  GenEdHum,
  GenEdHumCMST,
  GenEdHumEnglOrHnrs,
  GenEdSocialScience,
  GenEdSocialScience2000,
  IE3302,
  MATH1550,
  MATH1552,
  MATH2090,
  PhysicalScienceSequence1,
  PhysicalScienceSequence1Lab,
  PhysicalScienceSequence2,
  PhysicalScienceSequence2Lab,
  TechElectiveA,
  TechElectiveAorB,
} from "../../../../models/database/SWEDegree";

// Im gonna change this to just take in a course object
// and all the logic will be done in here. Just gotta
// figure out the details first
export const buildCourseNode = (
  course: Course,
  position: XYPosition,
): CourseNodeProps => {
  return {
    id: v4(),
    type: "course",
    data: {
      label: course.name,
      course,
    },
    // Need to write some logic to determine node position maybe
    position,
  };
};

export enum COURSE_STATUS_COLORS {
  COMPLETED = "#008000",
  IN_PROGRESS = "#FFD300",
  CAN_SCHEDULE = "#2196F3",
  CANNOT_SCHEDULE = "#000000",
  TOBE_SCHEDULED = "#6A5ACD",
}

/**
 * darkenColor(string, number)
 *
 * @param color Color as a hex code
 * @param percent % to darken by
 * @returns New darkened hex code
 */
export const darkenColor = (color: string, percent: number): string => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  let R = (num >> 16) - amt;
  let G = ((num >> 8) & 0x00ff) - amt;
  let B = (num & 0x0000ff) - amt;

  // Ensure values are bounded by 0 and 255
  R = R < 0 ? 0 : R > 255 ? 255 : R;
  G = G < 0 ? 0 : G > 255 ? 255 : G;
  B = B < 0 ? 0 : B > 255 ? 255 : B;

  return `#${((1 << 24) + (R << 16) + (G << 8) + B)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

export const buildDegreeNodes = (degree: Degree): CourseNodeProps[] => {
  const { requirements, rootCourses } = degree;
  const courseNodes: CourseNodeProps[] = [];

  const rootMaxColumns = 8;
  const rootWidthDivision = window.innerWidth / rootMaxColumns;
  const columnSpacingMultiplier = 1.7;

  const columns: Course[][] = [
    [CSC1350, MATH1550, ENGL1001, BIOL],
    [
      CSC1351,
      MATH1552,
      GenEdHumEnglOrHnrs,
      PhysicalScienceSequence1,
      PhysicalScienceSequence1Lab,
    ],
    [
      CSC3102,
      CSC2259,
      MATH2090,
      GenEdHum,
      PhysicalScienceSequence2,
      PhysicalScienceSequence2Lab,
    ],
    [CSC3380, CSC3501, CSC2262, GenEdHumCMST, ENGL2000],
    [CSC4330, CSC4101, IE3302, CSC3200, TechElectiveA],
    [CSC4103, CSC4351, CSC2000Elective, GenEdSocialScience, TechElectiveAorB],
    [CSC4402, CSC2000ElectiveSeg, GenEdSocialScience2000, ApprovedElective1],
    [
      CSC3000Elective,
      CSC4000Elective,
      AreaElective2,

      GenEdArt,
      ApprovedElective2,
    ],
  ];

  const maxNodesInColumn = Math.max(...columns.map((column) => column.length));

  // Calculate the vertical space between nodes, assuming equal spacing from top to bottom
  const verticalSpacing = window.innerHeight / (maxNodesInColumn - 1);

  columns.forEach((column, columnIndex) => {
    const x = columnIndex * rootWidthDivision * columnSpacingMultiplier;

    column.forEach((course, courseIndex) => {
      // Calculate the y position based on the standardized vertical spacing
      const y = courseIndex * verticalSpacing;

      courseNodes.push(buildCourseNode(course, { x, y }));
    });
  });

  return [...courseNodes];
};

export const buildEdges = (courseNodes: CourseNodeProps[]): Edge[] => {
  const edges: Edge[] = [];

  courseNodes.forEach((node) => {
    const course = node.data.course;
    if (course.prereqs.length > 0) {
      course.prereqs.forEach((prereq) => {
        const sourceId =
          courseNodes.find((node) => node.data.course.equals(prereq))?.id ?? "";

        edges.push({
          type: "course",
          id: sourceId + "-" + node.id,
          source: sourceId,
          sourceHandle: "outputHandle",
          target: node.id,
          targetHandle: "inputHandle",
        });
      });
    }
  });

  return edges;
};
