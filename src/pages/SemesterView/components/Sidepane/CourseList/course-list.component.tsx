import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import { Dispatch, ReactNode } from "react";
import React from "react";
import { Button } from "@mui/material";

import { selectCourse } from "../../../../../store/Semester/semester-slice";

import styles from "./course-list.module.scss";
import { Category } from "@mui/icons-material";
import { CategoryCourse } from "../../../../../models/course";
import { CourseTile } from "../CourseTile/course-tile.components";

export const CourseList = (): JSX.Element => {
  const courses = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );

  const dispatch = useDispatch();

  const renderedCourses: ReactNode[] = courses.map((course): ReactNode => {
    return <CourseTile key={course.name} course={course}></CourseTile>;
  });

  return (
    <div className={styles.CourseList}>
      {/* <h2> Courses:</h2> */}
      <div className={styles.center}>{renderedCourses}</div>
    </div>
  );
};
