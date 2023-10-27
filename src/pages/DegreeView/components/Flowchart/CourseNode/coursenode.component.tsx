import { Node } from "react-flow-renderer";
import { COURSE_STATUS_COLORS, darkenColor } from "../flowchart.utils";
import styles from "./coursenode.module.scss";
import { useMemo } from "react";
import {
  CategoryCourse,
  CoreCourse,
  Course,
} from "../../../../../models/course";
import { Label } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCourseNode } from "../../../../../store/Degree/degree-slice";
import { AppState } from "../../../../../store/store";

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
  const { label, course } = data;
  const $completedCourses = useSelector(
    (state: AppState) => state.student.completedCourses,
  );

  const borderColor: string = useMemo(() => {
    if (course instanceof CoreCourse) {
      if (!course.hasPrereqs()) {
        return COURSE_STATUS_COLORS.CAN_SCHEDULE;
      }
    }
    if (course instanceof CategoryCourse) {
      if (course.options.some((option) => !option.hasPrereqs()))
        return COURSE_STATUS_COLORS.CAN_SCHEDULE;
    }
    if (course instanceof Course) {
    }
    // add logic to determine border color
    // by comparing course to student's completed courses
    return COURSE_STATUS_COLORS.CANNOT_SCHEDULE;
  }, [$completedCourses]);

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
