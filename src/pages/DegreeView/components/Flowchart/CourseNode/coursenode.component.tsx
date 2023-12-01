import { Handle, Node, Position } from "react-flow-renderer";
import { COURSE_STATUS_COLORS, darkenColor } from "../flowchart.utils";
import styles from "./coursenode.module.scss";
import { useMemo } from "react";
import { Course } from "../../../../../models/course";
import { useDispatch, useSelector } from "react-redux";
import {
  setHoveredCourseNodeID,
  setSelectedCourseNode,
} from "../../../../../store/Degree/degree-slice";
import { AppState } from "../../../../../store/store";
import { getCourseBorderColor } from "./nodeUtils";

export interface CourseData {
  label: string;
  course: Course;
}

// Use the Node type for CourseNodeProps
export interface CourseNodeProps extends Node<CourseData> {}

export const CourseNode: React.FC<CourseNodeProps> = ({
  data,
  id,
}: CourseNodeProps) => {
  const dispatch = useDispatch();
  const { course } = data;

  const $hoveredCourseNode = useSelector(
    (state: AppState) => state.degree.hoveredCourseNodeID,
  );
  const $requirements = useSelector(
    (state: AppState) => state.student.majors[0].requirements,
  );
  const $edges = useSelector((state: AppState) => state.degree.edges);

  const $force = useSelector((state: AppState) => state.app.forceRerender);

  const visible = useMemo(() => {
    const isHoveredNode =
      $hoveredCourseNode === null || $hoveredCourseNode === id;

    const isConnectedToHoveredNode = $edges.some(
      (edge) =>
        (edge.source === id && edge.target === $hoveredCourseNode) ||
        (edge.target === id && edge.source === $hoveredCourseNode),
    );

    return isHoveredNode || isConnectedToHoveredNode;
  }, [$hoveredCourseNode, $edges, id]);

  const $completedCourses = useSelector(
    (state: AppState) => state.student.scheduledCourses,
  );
  const $coursesToSchedule = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );

  const $scheduledSections = useSelector(
    (state: AppState) => state.semester.scheduledSections,
  );

  const borderColor: string = useMemo(() => {
    return getCourseBorderColor(course);
  }, [$completedCourses, $coursesToSchedule, $scheduledSections, $force]);

  const handleNodeClick = (): void => {
    dispatch(setSelectedCourseNode(course));
  };
  const handleNodeHover = (): void => {
    if (
      course.prereqs.length > 0 ||
      $requirements.some((requirement) =>
        requirement.prereqs.some((prereq) => prereq.equals(course)),
      )
    )
      dispatch(setHoveredCourseNodeID(id));
  };
  const handleMouseLeave = (): void => {
    dispatch(setHoveredCourseNodeID(null));
  };

  const divOpacity = visible ? 1 : 0.5; // 100% opacity if visible, else 50% transparent

  return (
    <div
      onClick={handleNodeClick}
      onMouseEnter={handleNodeHover}
      onMouseLeave={handleMouseLeave}
      className={`${styles.courseNode} ${
        borderColor === COURSE_STATUS_COLORS.CANNOT_SCHEDULE
          ? styles.darkenedCourse
          : ""
      }`}
      style={
        {
          "--initialBorderColor": borderColor || "black",
          "--darkenedColor": darkenColor(borderColor, 18),
          opacity: divOpacity,
        } as React.CSSProperties
      }
    >
      <h4>{course.name}</h4>
      <Handle type="source" position={Position.Right} id="outputHandle" />
      {course.prereqs.length > 0 && (
        <Handle type="target" position={Position.Left} id="inputHandle" />
      )}
    </div>
  );
};

export default CourseNode;
