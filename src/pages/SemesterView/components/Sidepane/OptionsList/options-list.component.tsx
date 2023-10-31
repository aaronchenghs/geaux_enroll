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
import { CourseTile } from "../CourseTile/course-tile.components";

export const OptionList = (): JSX.Element => {
  const selected: CategoryCourse = useSelector(
    (state: AppState) => state.semester.selectedProps.course! as CategoryCourse,
  );

  const dispatch = useDispatch();

  const renderedCourses: ReactNode[] = selected.options.map(
    (course): ReactNode => {
      return <CourseTile key={course.name} course={course}></CourseTile>;
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
