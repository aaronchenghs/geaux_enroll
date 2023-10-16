import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import { Dispatch, ReactNode } from "react";
import React from "react";
import { Button } from "@mui/material";

import styles from "./sections-list.module.scss";
import {
  addSection,
  removeSection,
  returnFromCurrentSelection,
} from "../../../../../store/Semester/semester-slice";
import { WeeklySchedule } from "../../../../../models/weeklySchedule";

export const SectionList = (): JSX.Element => {
  // const state = useSelector((state: AppState) => state.semester);

  const dispatch = useDispatch();

  const schedule: WeeklySchedule = useSelector((state: AppState) => {
    // If the selected course has a section selected, remove it from the schedule
    // This is because if you select a different section of the same course,
    // Then the current section will first be removed, so we do it ahead of time to correctly
    // Show which courses are blocked, and which ones are available to schedule.
    if (state.semester.selectedCourseProps.course?.section != null) {
      return WeeklySchedule.disunion(
        state.semester.schedule,
        state.semester.selectedCourseProps.course?.section.schedule,
      );
    } else {
      return state.semester.schedule;
    }
  });

  const selectedCourseProps = useSelector(
    (state: AppState) => state.semester.selectedCourseProps,
  );

  const renderedSections: ReactNode[] = selectedCourseProps.sections.map(
    (section): ReactNode => {
      const isScheduled =
        selectedCourseProps.course?.section?.number == section.number;
      const doesCollide = WeeklySchedule.doCollide(schedule, section.schedule);
      let onClick;

      // If its already added or can't be added, clicking should do nothing
      if (isScheduled || doesCollide) {
        onClick = (): void => {};
      } else {
        onClick = (): void => {
          dispatch(addSection(section));
        };
      }

      return (
        <React.Fragment key={section.number}>
          <Button
            className={`${styles.navButton} ${
              isScheduled ? styles.scheduled : ""
            } ${!isScheduled && doesCollide ? styles.disabled : ""}`}
            onClick={onClick}
            disabled={!isScheduled && doesCollide}
          >
            <div>
              <h2> {section.number} </h2>
              <h4>{"Dr. " + section.instructor?.lastName}</h4>
              <p>
                {"Location: " +
                  section.location?.building +
                  " " +
                  section.location?.roomNumber}
              </p>
            </div>
          </Button>
        </React.Fragment>
      );
    },
  );

  let clearSectionButton: JSX.Element;
  if (selectedCourseProps.course?.section != null) {
    clearSectionButton = (
      <Button
        className={styles.clear}
        onClick={(): void => {
          dispatch(removeSection(selectedCourseProps.course!.section!));
        }}
      >
        {" "}
        Clear Section{" "}
      </Button>
    );
  } else {
    clearSectionButton = <></>;
  }

  return (
    <div className={styles.SectionList}>
      <h2 className={styles.title}>
        {" "}
        Sections of {selectedCourseProps.course?.courseAbreviation}{" "}
      </h2>

      <div className={styles.center}>
        <Button
          className={styles.back}
          onClick={(): unknown => dispatch(returnFromCurrentSelection())}
        >
          <h3>{"Go Back"}</h3>
        </Button>
        {renderedSections}
        {clearSectionButton}
      </div>
    </div>
  );
};
