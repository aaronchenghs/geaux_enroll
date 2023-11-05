import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { ReactNode } from "react";
import React from "react";
import { useState } from "react";
import styles from "./week-chart.module.scss";
import { start } from "repl";
import { ScheduledSection } from "./ScheduledSection/ScheduledSection";
import { selectCourse } from "../../../../store/Semester/semester-slice";
import {
  CategoryCourse,
  Course,
  Department,
} from "../../../../models/course";

export const WeekChart = (): JSX.Element => {
  const dispatch = useDispatch();
  //const { weeklySchedule } = useSelector((state) => state.)
  const [scheduledSection, setScheduleSection] = useState([
    { courseName: "CSC 4243", rowStart: 0, rowEnd: 1, colStart: 1, colEnd: 2 },
    { courseName: "CSC 4402", rowStart: 0, rowEnd: 1, colStart: 2, colEnd: 3 },
    { courseName: "CSC 4585", rowStart: 0, rowEnd: 1, colStart: 3, colEnd: 4 },
    { courseName: "CSC 4501", rowStart: 0, rowEnd: 1, colStart: 4, colEnd: 5 },
    { courseName: "CSC 4501", rowStart: 0, rowEnd: 1, colStart: 5, colEnd: 6 },
  ]);

  //I receive an array of scheduled courses, mimicked by the above array ^^
  //then I make all the courses from the array appear on the weekly chart >>
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
          {scheduledSection.map((item) => (
            <ScheduledSection
              key={item.courseName}
              courseName={item.courseName}
              rowStart={item.rowStart}
              rowEnd={item.rowEnd}
              colStart={item.colStart}
              colEnd={item.colEnd}
              onClick={(): unknown => 5 + 5}
            >
              {item.courseName}
            </ScheduledSection>
          ))}
        </div>
    </>
  );
};
