import React, { Fragment } from "react";
import styles from "./scheduletopbarcontent.module.scss";
import SegmentedProgressBar, {
  segment,
} from "../ProgressBar/segmentedprogressbar.component";
import { Star } from "@mui/icons-material";

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
  return (
    <div className={styles.row}>
      <h2 className={styles.semester}> Fall 2023</h2>
      <div className={styles.progress_container}>
        <SegmentedProgressBar segments={sampleSegments} max={100} />
      </div>
      <div className={styles.rating_container}>
        <Star className={styles.star} style={{ fontSize: "48px" }}></Star>
        <h3> 5.0 </h3>
      </div>
    </div>
  );
};

export default ScheduleTopBarContent;
