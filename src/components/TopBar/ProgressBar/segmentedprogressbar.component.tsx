import React from "react";
import styles from "./segmentedprogressbar.module.scss";

interface segment {
  id: string;
  label: string;
  color: string;
  value: number;
  tooltip: "This is the initial phase.";
  isActive: true;
  onClick: () => void;
}

interface Props {
  segments: segment[];
  max: number;
}

const SegmentedProgressBar = ({ segments }: Props): JSX.Element => {
  return (
    <div className={styles.progressBarContainer}>
      {segments.map((segment, index) => (
        <div
          key={index}
          className={styles.progressBarSegment}
          style={{
            flexBasis: `${segment.value}%`,
            backgroundColor: segment.color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SegmentedProgressBar;
