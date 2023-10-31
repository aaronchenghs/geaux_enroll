import { useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import { ReactNode } from "react";
import React from "react";
import styles from "./ScheduledSection.module.scss";
interface ScheduledSectionProps {
  courseName: string;
  rowStart: number;
  rowEnd: number;
  colStart: number;
  colEnd: number;
  children: string;
  onClick: () => void;
}

export const ScheduledSection = ({
  courseName,
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  onClick
}: ScheduledSectionProps): JSX.Element => {
  return (
    <>
      <div
        className={styles.scheduledSection}
        style={{
          gridRowStart: rowStart,
          gridRowEnd: rowEnd,
          gridColumnStart: colStart,
          gridColumnEnd: colEnd,
        }}
        onClick={onClick}
      >
        <div className={styles.courseName}>{courseName}</div>
      </div>
    </>
  );
};
