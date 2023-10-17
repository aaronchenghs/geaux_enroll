import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import { Dispatch, ReactNode } from "react";
import React from "react";
import { Button } from "@mui/material";

import {
  returnFromCurrentSelection,
  selectCourse,
} from "../../../../../store/Semester/semester-slice";

// Modular style inshallah
import styles from "./options-list.module.scss";
import { CategoryCourse } from "../../../../../models/course";

export const OptionList = (): JSX.Element => {
  const selected: CategoryCourse = useSelector(
    (state: AppState) => state.semester.selectedProps.course! as CategoryCourse,
  );

  const dispatch = useDispatch();

  const renderedCourses: ReactNode[] = selected.options.map(
    (course): ReactNode => {
      const wasSelected = selected.optionTaken == course;

      return (
        <React.Fragment key={course.name}>
          <Button
            className={`${styles.navButton} ${
              wasSelected ? styles.scheduled : ""
            }`}
            onClick={(): unknown => dispatch(selectCourse(course))}
          >
            <h3>{course.courseAbreviation}</h3>
          </Button>
        </React.Fragment>
      );
    },
  );

  return (
    <div className={styles.OptionsList}>
      <h2 className={styles.title}>Options for {selected.courseAbreviation}</h2>
      <div className={styles.center}>
        {" "}
        <Button
          className={styles.back}
          onClick={(): unknown => dispatch(returnFromCurrentSelection())}
        >
          <h3>{"Go Back"}</h3>
        </Button>
        {renderedCourses}
      </div>
    </div>
  );
};
