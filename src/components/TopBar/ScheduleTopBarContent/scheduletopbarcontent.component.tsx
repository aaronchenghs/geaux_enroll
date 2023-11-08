import React, { Fragment } from "react";
import styles from "./scheduletopbarcontent.module.scss";
import SegmentedProgressBar, {
  segment,
} from "../ProgressBar/segmentedprogressbar.component";
import { Star } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";
import StarRating from "./star-bar/star-rating.component";
import StarBar from "./star-bar/star-bar.component";

const sampleSegments: segment[] = [
  {
    id: "1",
    label: "wow",
    color: "#008000",
    value: 30,
    tooltip: "Hours Scheduled",
  },
];

const ScheduleTopBarContent = (): JSX.Element => {
  const rating: number | null = useSelector((state: AppState) => {
    if (state.semester.coursesToSchedule.length < 1) {
      return null;
    }

    const countWithProf = state.semester.scheduledSections.reduce(
      (count, section) => {
        return (section.instructor != null ? 1 : 0) + count;
      },
      0,
    );

    const avgRating =
      state.semester.coursesToSchedule.reduce((acumulate, section) => {
        // Flutter >>>> React
        // (course.section?.instructor?.section.ration ?? 0) + acumulate
        return (
          (section.section?.instructor?.rating != null
            ? section.section.instructor.rating
            : 0) + acumulate
        );
      }, 0) / countWithProf;

    return avgRating;
  });

  const segments: segment[] = useSelector((state: AppState) => {
    const hoursScheduled = state.semester.scheduledSections.reduce(
      (hoursTotal, section) => {
        return (section.course.credits ?? 0) + hoursTotal;
      },
      0,
    );

    return [
      {
        id: "1",
        label: "Hour Scheduled",
        color: "#008000",
        value: hoursScheduled,
        tooltip: hoursScheduled + " Hours Scheduled",
      },
    ];
  });

  const maxHours: number = useSelector((state: AppState) => {
    return state.semester.coursesToSchedule.reduce((a, course) => {
      return a + course.credits;
    }, 0);
  });

  return (
    <div className={styles.row}>
      <h2 className={styles.semester}>
        {" "}
        <span className={styles.light}>Scheduling: </span> Fall 2023
      </h2>
      <div className={styles.progress_container}>
        <SegmentedProgressBar segments={segments} max={maxHours} />
      </div>
      <div className={styles.rating_container}>
        {/* <Star className={styles.star} style={{ fontSize: "48px" }}></Star> */}
        {/* <StarRating rating={50} size={48}></StarRating> */}
        <h4>
          <span className={styles.light}>AVG RATING:</span>{" "}
          <b>{rating ? rating.toFixed(2) : "0.0"} </b>
        </h4>
        <StarBar rating={rating ? rating : 0}></StarBar>
      </div>
    </div>
  );
};

export default ScheduleTopBarContent;
