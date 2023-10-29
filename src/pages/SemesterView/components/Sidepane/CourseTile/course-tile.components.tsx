import React from "react";
import { CategoryCourse, Course } from "../../../../../models/course";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";

import styles from "./course-tile.module.scss";
import { selectCourse } from "../../../../../store/Semester/semester-slice";

export interface Props {
  course: Course;
}

export const CourseTile = ({ course }: Props): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className={styles.CourseTile}>
      <Button
        className={`${styles.navButton} ${
          course.section != null ? styles.scheduled : ""
        }`}
        onClick={(): unknown => dispatch(selectCourse(course))}
      >
        <h3>
          {course.section != null && course instanceof CategoryCourse
            ? course.courseAbreviation + ":"
            : ""}
          {`${
            course.section == null
              ? course.courseAbreviation
              : course.section.name
          }`}
        </h3>
      </Button>
    </div>
  );
};
