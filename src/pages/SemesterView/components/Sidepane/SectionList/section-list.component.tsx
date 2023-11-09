import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import {
  LocationOnOutlined,
  Star,
  Apple,
  Person,
  ArrowBack,
} from "@mui/icons-material";

import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";

import { Dispatch, ReactNode } from "react";
import React from "react";
import { Button } from "@mui/material";

import styles from "./sections-list.module.scss";
import {
  addSection,
  hoverSection,
  removeSection,
  returnFromCurrentSelection,
  unhoverSection,
} from "../../../../../store/Semester/semester-slice";
import {
  DAYS_IN_LIST,
  WeeklySchedule,
  hrtsToString,
} from "../../../../../models/weeklySchedule";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Header } from "../Header/header.component";

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
      const sectionFull = selectedCourseProps.course?.section?.isFull;
      let onClick;

      // If its already added or can't be added, clicking should do nothing
      if (isScheduled || doesCollide || sectionFull) {
        onClick = (): void => {};
      } else {
        onClick = (): void => {
          dispatch(addSection(section));
        };
      }

      const onMouseEnter = (): void => {
        dispatch(hoverSection(section));
      };

      const onMouseLeave = (): void => {
        dispatch(unhoverSection(section));
      };

      const dayTiles: ReactNode[] = section.schedule.days.map(
        (timeslot, index) => {
          if (timeslot != null)
            return (
              <p
                key={index}
                className={styles.day}
                style={{ backgroundColor: DAYS_IN_LIST[index].color }}
                data-tooltip-id="time-hr"
                data-tooltip-content={hrtsToString(timeslot.readable)}
              >
                {DAYS_IN_LIST[index].shortName}
              </p>
            );
        },
      );

      const isDisabled = !isScheduled && (doesCollide || sectionFull);

      // Section Button
      return (
        <React.Fragment key={section.number}>
          <Button
            className={`${styles.navButton} ${
              isScheduled ? styles.scheduled : ""
            } ${isDisabled ? styles.disabled : ""}`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            // centerRipple={!(!isScheduled && (doesCollide || sectionFull))}
            disableRipple={isDisabled}
            // disabled={!isScheduled && doesCollide}

            // ={!isScheduled && doesCollide && sectionFull}
          >
            <div className={styles.major_row}>
              <p className={styles.num}>{section.number}</p>
              <div className={styles.column}>
                <div className={styles.row}>
                  <div className={styles.location_container}>
                    <LocationOnOutlined style={{ fontSize: "1.5vw" }} />
                    <p className={styles.location}>
                      {" "}
                      {section.location?.building +
                        " " +
                        section.location?.roomNumber}
                    </p>
                  </div>

                  <div className={styles.days_container}>
                    <Tooltip id="time-hr" />
                    {dayTiles}
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.flexrow}>
                    <Star />
                    <p>
                      {" "}
                      {section.instructor
                        ? section.instructor.rating.toPrecision(
                            section.instructor.rating < 1 ? 2 : 3,
                          )
                        : "---"}
                    </p>
                  </div>
                  <div className={`${styles.flexrow} ${styles.name}`}>
                    <EmojiPeopleOutlinedIcon style={{ fontSize: "24px" }} />
                    <p className={styles.instructor}>
                      {section.instructor ? section.instructor.name : "TBH"}
                    </p>
                  </div>
                  <div className={styles.flexrow}>
                    <Person />
                    <p>
                      {section.enrollmentCount} / {section.enrollmentLimit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Button>
        </React.Fragment>
      );
    },
  );

  let clearSectionButton: JSX.Element;
  if (selectedCourseProps.course?.section) {
    clearSectionButton = (
      <Button
        className={styles.clear}
        onClick={(): void => {
          dispatch(removeSection(selectedCourseProps.course!.section!));
        }}
      >
        Clear Currently Scheduled Section
      </Button>
    );
  } else {
    clearSectionButton = <></>;
  }

  const header: JSX.Element = (
    <Header
      pretitle="Sections of: "
      title={
        selectedCourseProps.course?.department +
        " " +
        selectedCourseProps.course?.code
      }
    ></Header>
  );

  return (
    <div className={styles.SectionList}>
      <div className={styles.center}>
        {header}
        {renderedSections}
        {clearSectionButton}
      </div>
    </div>
  );
};
