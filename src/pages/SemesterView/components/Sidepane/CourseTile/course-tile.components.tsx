import React from "react";
import { CategoryCourse, Course } from "../../../../../models/course";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";

import styles from "./course-tile.module.scss";
import { selectCourse } from "../../../../../store/Semester/semester-slice";
import { Star } from "@mui/icons-material";

export interface Props {
  course: Course;
}

export const CourseTile = ({ course }: Props): JSX.Element => {
  const dispatch = useDispatch();

  let title: string;
  let subtitle: string | null = null;

  if (course instanceof CategoryCourse) {
    title = course.name;

    if (course.optionTaken) {
      subtitle = course.optionTaken.department + " " + course.optionTaken.code;

      if (course.optionTaken.section) {
        subtitle += " - " + course.optionTaken.section.number;
      }
    }
  } else {
    title = course.department + " " + course.code;

    if (course.section) {
      subtitle = "Section: " + course.section.number;
    } else {
      subtitle = "Section: ???";
    }
  }

  const subtitleObj = subtitle ? <h4>{subtitle}</h4> : <></>;

  const titleObj = (
    <div className={styles.title_container}>
      <div className={styles.icon_container}>
        <Star style={{ fontSize: "48px" }} />
      </div>
      <div className={styles.text_container}>
        <h3>{title}</h3>
        {subtitleObj}
      </div>
    </div>
  );

  return (
    <div className={styles.CourseTile}>
      <Button
        className={`${styles.navButton} ${
          course.section != null ? styles.scheduled : ""
        }`}
        onClick={(): unknown => dispatch(selectCourse(course))}
      >
        <div className={styles.container}>{titleObj}</div>
      </Button>
    </div>
  );
};
