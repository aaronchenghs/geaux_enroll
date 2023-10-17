import { useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { ReactNode } from "react";
import React from "react";

import styles from "./week-chart.module.scss";

export const WeekChart = (): JSX.Element => {
  return (
    <>
    <h2 className={styles.title}> Schedule </h2>
      <div className={styles.grid}>
        <div className={styles.timeColumn}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div>
        <div className={styles.item}>5</div>
        <div className={styles.item}>6</div>
        <div className={styles.timeColumn}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div>
        <div className={styles.item}>5</div>
        <div className={styles.item}>6</div>
      </div>
    </>
  );
};
