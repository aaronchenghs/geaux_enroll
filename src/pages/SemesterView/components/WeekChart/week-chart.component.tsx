import { useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { ReactNode } from "react";
import React from "react";

import styles from "./week-chart.module.scss";

export const WeekChart = (): JSX.Element => {
  return (
    <>
      <h2 className={styles.title}> Schedule </h2>
      <div className={styles.inlineDiv}>
        <h3>Mon</h3>
        <h3>Tue</h3>
        <h3>Wed</h3>
        <h3>Thu</h3>
        <h3>Fri</h3>
      </div>
      <div className={styles.grid}>
        <div className={styles.timeColumn}>7:30</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div>
        <div className={styles.item}>5</div>
        <div className={styles.item}>6</div>
        <div className={styles.timeColumn}>8:00</div>
        <div className={styles.timeColumn}>8:30</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div>
        <div className={styles.item}>5</div>
        <div className={styles.item}>6</div>
        <div className={styles.timeColumn}>9:00</div>
      </div>
    </>
  );
};
