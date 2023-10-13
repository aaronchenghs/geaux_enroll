import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import { Dispatch, ReactNode } from "react";
import React from "react";
import { Button } from "@mui/material";

import { selectCourse } from "../../../../../store/Semester/semester-slice";

// Modular style inshallah
import styles from "../CourseList/course-list.module.scss";

export const OptionList = (): JSX.Element => {
  const selected = useSelector(
    (state: AppState) => state.semester.selectedCourseProps,
  );

  const dispatch = useDispatch();

  const renderedCourses: ReactNode[] = selected.options.map(
    (course): ReactNode => {
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
    },
  );

  return (
    <div className={styles.CourseList}>
      <h2 className={styles.title}>
        {" "}
        Options for {selected.course?.courseAbreviation}
      </h2>
      <div className={styles.center}>
        {" "}
        <Button
          className={styles.back}
          onClick={(): unknown => dispatch(selectCourse(null))}
        >
          <h3>{"Go Back"}</h3>
        </Button>
        {renderedCourses}
      </div>
    </div>
  );
};
