import { Edge, XYPosition } from "react-flow-renderer";
import { Course } from "../../../../models/course";
import { Degree } from "../../../../models/degree";
import { CourseNodeProps } from "./CourseNode/coursenode.component";
import { v4 } from "uuid";

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
  IN_PROGRESS = "#FFC300",
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
  const { requirements } = degree;

  // Max number of columns and rows
  const maxCols = 8;
  const maxRows = Math.ceil(requirements.length / maxCols);

  // Calculate the width and height division for nodes
  const widthDivision = window.innerWidth / maxCols;
  const heightDivision = window.innerHeight / maxRows;

  const courseNodes: CourseNodeProps[] = requirements.map(
    (requirement, index) => {
      // Determine the x and y based on index for column-first filling
      const x = Math.floor(index / maxRows) * widthDivision;
      const y = (index % maxRows) * heightDivision;

      return buildCourseNode(requirement, { x, y });
    },
  );

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
