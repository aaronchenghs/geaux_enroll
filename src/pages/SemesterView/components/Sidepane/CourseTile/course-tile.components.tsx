import React from "react";
import {
  CategoryCourse,
  Course,
  Department,
} from "../../../../../models/course";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";

import styles from "./course-tile.module.scss";
import { selectCourse } from "../../../../../store/Semester/semester-slice";
import {
  AutoStories,
  Biotech,
  Calculate,
  Campaign,
  ColorLens,
  Computer,
  Gavel,
  Hub,
  MusicNote,
  Power,
  PrecisionManufacturing,
  PsychologyAlt,
  QuestionMark,
  Science,
  SmartToy,
  Star,
  Update,
  Vrpano,
  Work,
} from "@mui/icons-material";

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

  let icon;

  switch (
    course instanceof CategoryCourse
      ? course.optionTaken?.department
      : course.department
  ) {
    case Department.ART:
      icon = <ColorLens />;
      break;
    case Department.ARTH:
      icon = <Vrpano />;
      break;
    case Department.BA:
      icon = <Work />;
      break;
    case Department.BIOL:
      icon = <Biotech />;
      break;
    case Department.CHE:
      icon = <Science />;
      break;
    case Department.CSC:
      icon = <Computer />;
      break;
    case Department.ECE:
      icon = <SmartToy />;
      break;
    case Department.EE:
      icon = <Power />;
      break;
    case Department.ENGL:
      icon = <AutoStories />;
      break;
    case Department.HIST:
      icon = <Update />;
      break;
    case Department.IE:
      icon = <PrecisionManufacturing />;
      break;
    case Department.ISDS:
      icon = <Hub />;
      break;
    case Department.MATH:
      icon = <Calculate />;
      break;
    case Department.MUS:
      icon = <MusicNote />;
      break;
    case Department.MC:
      icon = <Campaign />;
      break;
    case Department.NA:
      icon = <QuestionMark />;
      break;
    case Department.PHIL:
      icon = <PsychologyAlt />;
      break;
    case Department.POLS:
      icon = <Gavel />;
      break;
    default:
      icon = <QuestionMark />;
      break;
  }

  const titleObj = (
    <div className={styles.title_container}>
      <div className={styles.icon_container}>{icon}</div>
      <div className={styles.text_container}>
        <h3 className={course instanceof CategoryCourse ? styles.category : ""}>
          {title}
        </h3>
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
