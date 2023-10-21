import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import { LocationOn, Star, Apple, Person } from "@mui/icons-material";

import { Dispatch, ReactNode } from "react";
import React from "react";
import { Button } from "@mui/material";

import styles from "./sections-list.module.scss";
import {
  addSection,
  removeSection,
  returnFromCurrentSelection,
} from "../../../../../store/Semester/semester-slice";
import {
  DAYS_IN_LIST,
  WeeklySchedule,
} from "../../../../../models/weeklySchedule";

export const SectionList = (): JSX.Element => {
  // const state = useSelector((state: AppState) => state.semester);

  const dispatch = useDispatch();

  const schedule: WeeklySchedule = useSelector((state: AppState) => {
    // We need to not consider the influence of the section that is currently scheduled for the section

    // Handle there is a parent of the current course, so we need to check it for the real section to remove
    if (
      state.semester.selectedProps.parent &&
      state.semester.selectedProps.parent.section != null
    ) {
      return WeeklySchedule.disunion(
        state.semester.schedule,
        state.semester.selectedProps.parent.section.schedule,
      );
    }

    // We can look at the current selected course to figure out which section to remove from consideration
    if (state.semester.selectedProps.course?.section != null) {
      return WeeklySchedule.disunion(
        state.semester.schedule,
        state.semester.selectedProps.course.section.schedule,
      );
    }

    // If there wasn't a section scheduled, return the exiting schedule unmodified
    return state.semester.schedule;
  });

  const selectedCourseProps = useSelector(
    (state: AppState) => state.semester.selectedProps,
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

      const dayTiles: ReactNode[] = section.schedule.days.map(
        (schedule, index) => {
          return <p key={index}>{DAYS_IN_LIST[index].shortName}</p>;
        },
      );

      // Section Button
      return (
        <React.Fragment key={section.number}>
          <Button
            className={`${styles.navButton} ${
              isScheduled ? styles.scheduled : ""
            } ${!isScheduled && doesCollide ? styles.disabled : ""}`}
            onClick={onClick}
            disabled={!isScheduled && doesCollide}
          >
            <div className={styles.column}>
              <div className={styles.row}>
                <p> {section.number} </p>
                <p>
                  {" "}
                  <LocationOn />
                  {section.location?.building +
                    " " +
                    section.location?.roomNumber}
                </p>
                {dayTiles}
              </div>

              <div className={styles.row}>
                <Star />
                <p> {section.instructor ? section.instructor.rating : "---"}</p>
                <Apple />
                <p>{section.instructor ? section.instructor.name : "TBH"}</p>
                <Person />
                <p>
                  {section.enrollmentCount} / {section.enrollmentLimit}
                </p>
              </div>
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
