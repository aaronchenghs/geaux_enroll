import {
  CategoryCourse,
  CoreCourse,
  Course,
} from "../../../../../models/course";
import { COURSE_STATUS_COLORS } from "../flowchart.utils";

export const getCourseBorderColor = (course: Course): string => {
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
};
