import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { Dispatch, ReactNode } from "react";
import React from "react";
import { Button } from "@mui/material";

import { selectCourse } from "../../../../store/Semester/semester-slice";

import styles from "./course-list.module.scss";

export const CourseList = (): JSX.Element => {
  const courses = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );

  const dispatch = useDispatch();

  const renderedCourses: ReactNode[] = courses.map((course): ReactNode => {
    return (
      <React.Fragment key={course.name}>
        <Button
          className={styles.navButton}
          onClick={(): unknown => dispatch(selectCourse(course))}
        >
          <h3>{course.courseAbreviation}</h3>
        </Button>
      </React.Fragment>
    );
  });

  return (
    <div className={styles.CourseList}>
      <h2 className={styles.title}> Courses </h2>
      <div className={styles.center}>{renderedCourses}</div>
    </div>
  );
};
