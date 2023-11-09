import { useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import { ReactNode } from "react";
import React from "react";
import styles from "./HoveredSection.module.scss";
export interface HoveredSectionProps {
  key: string;
  courseName: string;
  rowStart: number;
  rowEnd: number;
  colStart: number;
  colEnd: number;
  children: string;
  onClick: () => void;
}

export const HoveredSection = ({
  courseName,
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  onClick,
}: HoveredSectionProps): JSX.Element => {
  return (
    <>
      <div
        className={styles.hoveredSection}
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
