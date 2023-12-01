import {
  CategoryCourse,
  CoreCourse,
  Course,
} from "../../../../../models/course";
import store from "../../../../../store/store";
import { COURSE_STATUS_COLORS } from "../flowchart.utils";

export const getCourseBorderColor = (course: Course): string => {
  // Get the entire state once and destructure it to get the needed parts.
  const { semester, student } = store.getState();
  const { coursesToSchedule, scheduledSections } = semester;
  const { scheduledCourses: scheduledCourses } = student;

  // check COMPLETED
  if (
    scheduledCourses.some(
      (scheduledSection) =>
        scheduledSection.course.equals(course) && scheduledSection.course.grade,
    )
  ) {
    return COURSE_STATUS_COLORS.COMPLETED;
  }

  // check TO BE SCHEDULED
  // check IN PROGRESS
  if (
    scheduledCourses.some(
      (scheduledSection) =>
        scheduledSection.course.equals(course) &&
        !scheduledSection.course.grade,
    )
  ) {
    return COURSE_STATUS_COLORS.IN_PROGRESS;
  }
  if (
    coursesToSchedule.some((courseToSchedule) =>
      courseToSchedule.equals(course),
    )
  ) {
    return COURSE_STATUS_COLORS.TO_BE_SCHEDULED;
  }
  // Check CAN SCHEDULE (for CoreCourse or CategoryCourse with no prerequisites)
  // Check CAN SCHEDULE (for CoreCourse or CategoryCourse with no prerequisites)
  if (
    (course instanceof CoreCourse && !course.hasPrereqs()) ||
    (course instanceof CategoryCourse &&
      course.options.some((option) => !option.hasPrereqs())) ||
    course.prereqs.every((prereq) =>
      scheduledCourses.some(
        (scheduledSection) =>
          scheduledSection.course.equals(prereq) &&
          scheduledSection.course.grade != null,
      ),
    )
  ) {
    return COURSE_STATUS_COLORS.CAN_SCHEDULE;
  }

  // If none of the above, the course CANNOT be scheduled
  return COURSE_STATUS_COLORS.CANNOT_SCHEDULE;
};
