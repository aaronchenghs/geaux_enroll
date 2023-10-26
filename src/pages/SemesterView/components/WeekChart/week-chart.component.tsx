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
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>8:00</div>
        <div className={styles.timeColumn}>8:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>9:00</div>
        <div className={styles.timeColumn}>9:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>10:00</div>
        <div className={styles.timeColumn}>10:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>11:00</div>
        <div className={styles.timeColumn}>11:30</div>
        <div className={styles.beforeNoonItem}></div>
        <div className={styles.beforeNoonItem}></div>
        <div className={styles.beforeNoonItem}></div>
        <div className={styles.beforeNoonItem}></div>
        <div className={styles.beforeNoonItem}></div>
        <div className={styles.timeColumn}>12:00</div>
        <div className={styles.noonItem}></div>
        <div className={styles.noonItem}></div>
        <div className={styles.noonItem}></div>
        <div className={styles.noonItem}></div>
        <div className={styles.noonItem}></div>
        <div className={styles.timeColumn}>12:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>1:00</div>
        <div className={styles.timeColumn}>1:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>2:00</div>
        <div className={styles.timeColumn}>2:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>3:00</div>
        <div className={styles.timeColumn}>3:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>4:00</div>
        <div className={styles.timeColumn}>4:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>5:00</div>
        <div className={styles.timeColumn}>5:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>6:00</div>
        <div className={styles.timeColumn}>6:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>7:00</div>
        <div className={styles.timeColumn}>7:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>8:00</div>
        <div className={styles.timeColumn}>8:30</div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.invisibleItem}></div>
        <div className={styles.timeColumn}>9:00</div>
      </div>
    </>
  );
};
