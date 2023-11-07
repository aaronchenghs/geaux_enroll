import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { ReactNode } from "react";
import React from "react";
import { useState } from "react";
import styles from "./week-chart.module.scss";
import { start } from "repl";
import {
  ScheduledSection,
  ScheduledSectionProps,
} from "./ScheduledSection/ScheduledSection";
import { selectCourse } from "../../../../store/Semester/semester-slice";
import { CategoryCourse, Course, Department } from "../../../../models/course";
import { Section } from "../../../../models/section";
import { DAYS_IN_LIST, Days } from "../../../../models/weeklySchedule";

// This is the first hour displayed on the schedule
const startHour = 7;

function readableToRowIndex(hour: number, min: number): number {
  return (hour - startHour) * 4 + Math.round(min / 15);
}

export const WeekChart = (): JSX.Element => {
  const dispatch = useDispatch();

  const timeslotProps: ScheduledSectionProps[] = useSelector(
    (state: AppState) => {
      const timeslots: ScheduledSectionProps[] = [];

      state.semester.scheduledSections.forEach((section) => {
        section.schedule.days.forEach((day, i) => {
          if (day != null) {
            timeslots.push({
              courseName: section.course.courseAbreviation,
              rowStart: readableToRowIndex(
                day.readable!.startHour,
                day.readable!.startMin,
              ),
              rowEnd: readableToRowIndex(
                day.readable!.endHour,
                day.readable!.endMin,
              ),
              colStart: i + 1,
              colEnd: i + 1,
              onClick: (): void => {},
              children: "???",
            });
          }
        });
      });

      return timeslots;
    },
  );

  // //const { weeklySchedule } = useSelector((state) => state.)
  // const [scheduledSection, setScheduleSection] = useState([
  //   { courseName: "CSC 4243", rowStart: 0, rowEnd: 1, colStart: 1, colEnd: 2 },
  //   { courseName: "CSC 4402", rowStart: 0, rowEnd: 1, colStart: 2, colEnd: 3 },
  //   { courseName: "CSC 4585", rowStart: 0, rowEnd: 1, colStart: 3, colEnd: 4 },
  //   { courseName: "CSC 4501", rowStart: 0, rowEnd: 1, colStart: 4, colEnd: 5 },
  //   { courseName: "CSC 4501", rowStart: 0, rowEnd: 1, colStart: 5, colEnd: 6 },
  // ]);

  // //I receive an array of scheduled courses, mimicked by the above array ^^
  // //then I make all the courses from the array appear on the weekly chart >>
  return (
    <>
      <div className={styles.inlineDiv}>
        <h3>Mon</h3>
        <h3>Tue</h3>
        <h3>Wed</h3>
        <h3>Thu</h3>
        <h3>Fri</h3>
      </div>
      <div className={styles.grid}>
        {timeslotProps.map((timeslot) => (
          <ScheduledSection
            key={timeslot.courseName}
            courseName={timeslot.courseName}
            rowStart={timeslot.rowStart}
            rowEnd={timeslot.rowEnd}
            colStart={timeslot.colStart}
            colEnd={timeslot.colEnd}
            onClick={(): unknown => 5 + 5}
          >
            {timeslot.courseName}
          </ScheduledSection>
        ))}
      </div>
    </>
  );
};
