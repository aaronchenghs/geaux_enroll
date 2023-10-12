import { useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { ReactNode } from "react";
import React from "react";

import styles from "./course-list.module.scss";

export const CourseList = (): JSX.Element => {
  const courses = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );

  const renderedCourses: ReactNode[] = courses.map((course): ReactNode => {
    return (
      <React.Fragment key={course.name}>
        <p>{course.name}</p>
      </React.Fragment>
    );
  });

  return (
    <>
      <h2 className={styles.title}> Courses </h2>
      {renderedCourses}
    </>
  );
};
