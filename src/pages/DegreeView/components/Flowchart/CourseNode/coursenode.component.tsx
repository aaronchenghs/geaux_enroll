import { Node } from "react-flow-renderer";
import { darkenColor } from "../flowchart.utils";
import styles from "./coursenode.module.scss";
import { useMemo } from "react";
import { Course } from "../../../../../models/course";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCourseNode } from "../../../../../store/Degree/degree-slice";
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
}: CourseNodeProps) => {
  const dispatch = useDispatch();
  const { course } = data;
  const $completedCourses = useSelector(
    (state: AppState) => state.student.completedCourses,
  );
  const $coursesToSchedule = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );
  const $scheduledSections = useSelector(
    (state: AppState) => state.semester.scheduledSections,
  );

  const borderColor: string = useMemo(() => {
    return getCourseBorderColor(course);
  }, [$completedCourses, $coursesToSchedule, $scheduledSections]);

  const handleNodeClick = (): void => {
    // Will need to check for availability to click
    // can use same logic as calculating border color
    dispatch(setSelectedCourseNode(course));
  };

  return (
    <div
      onClick={handleNodeClick}
      className={styles.courseNode}
      style={
        {
          "--initialBorderColor": borderColor || "black",
          "--darkenedColor": darkenColor(borderColor, 18),
        } as React.CSSProperties
      }
    >
      <h4>{course.name}</h4>
    </div>
  );
};

export default CourseNode;
