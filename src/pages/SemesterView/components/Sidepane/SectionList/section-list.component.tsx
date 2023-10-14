import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import { Dispatch, ReactNode } from "react";
import React from "react";
import { Button } from "@mui/material";

import styles from "./sections-list.module.scss";
import {
  addSection,
  selectCourse,
} from "../../../../../store/Semester/semester-slice";
import { WeeklySchedule } from "../../../../../models/weeklySchedule";

export const SectionList = (): JSX.Element => {
  const state = useSelector((state: AppState) => state.semester);

  const dispatch = useDispatch();

  const renderedSections: ReactNode[] = state.selectedCourseProps.sections.map(
    (section): ReactNode => {
      let canAdd;
      let onClick;

      if (WeeklySchedule.doCollide(state.schedule, section.schedule)) {
        onClick = (): void => {};
        canAdd = false;
      } else {
        onClick = (): void => {
          dispatch(addSection(section));
        };
        canAdd = true;
      }

      return (
        <React.Fragment key={section.number}>
          <Button
            className={`${styles.navButton}`}
            onClick={onClick}
            disabled={!canAdd}
          >
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
        Sections of {state.selectedCourseProps.course?.courseAbreviation}{" "}
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
