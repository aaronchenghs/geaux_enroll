import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import { ReactNode } from "react";

import styles from "./course-list.module.scss";
import { CourseTile } from "../CourseTile/course-tile.components";

export const CourseList = (): JSX.Element => {
  const courses = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );

  const dispatch = useDispatch();

  const renderedCourses: ReactNode[] = courses.map((course): ReactNode => {
    return <CourseTile key={course.name} course={course}></CourseTile>;
  });

  return (
    <div className={styles.CourseList}>
      {/* <h2> Courses:</h2> */}
      <div className={styles.center}>{renderedCourses}</div>
    </div>
  );
};
