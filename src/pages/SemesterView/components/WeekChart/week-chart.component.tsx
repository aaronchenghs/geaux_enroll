import { useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { ReactNode } from "react";
import React from "react";

import styles from "./week-chart.module.scss";

export const WeekChart = (): JSX.Element => {
  return (
    <>
      <h2 className={styles.title}> Schedule </h2>
    </>
  );
};
