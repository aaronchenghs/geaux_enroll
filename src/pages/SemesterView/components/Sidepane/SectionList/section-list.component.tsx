import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import { Dispatch, ReactNode } from "react";
import React from "react";
import { Button } from "@mui/material";

import styles from "./sections-list.module.scss";
import { selectCourse } from "../../../../../store/Semester/semester-slice";

export const SectionList = (): JSX.Element => {
  const input = useSelector(
    (state: AppState) => state.semester.selectedCourseProps,
  );

  const dispatch = useDispatch();

  const renderedSections: ReactNode[] = input.sections.map(
    (section): ReactNode => {
      return (
        <React.Fragment key={section.number}>
          <Button className={styles.navButton} onClick={(): unknown => 10 + 10}>
            <h3>{"Section: " + section.number}</h3>
          </Button>
        </React.Fragment>
      );
    },
  );

  return (
    <div className={styles.SectionList}>
      <h2 className={styles.title}>
        {" "}
        Sections of {input.course?.courseAbreviation}{" "}
      </h2>

      <div className={styles.center}>
        <Button
          className={styles.back}
          onClick={(): unknown => dispatch(selectCourse(null))}
        >
          <h3>{"Go Back"}</h3>
        </Button>
        {renderedSections}
      </div>
    </div>
  );
};
