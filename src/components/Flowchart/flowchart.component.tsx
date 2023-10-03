import React, { Fragment, useEffect } from "react";
import styles from "./flowchart.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";

const FlowChart = (): JSX.Element => {
  const $view = useSelector((state: AppState) => state.app.view);
  useEffect(() => {
    //lets make a cute little animation where this slides out left when toggling to schedule view
  }, [$view]);

  return (
    <Fragment>
      <div className={styles.Flowchart}>This is the beginning of our app</div>
    </Fragment>
  );
};
export default FlowChart;
