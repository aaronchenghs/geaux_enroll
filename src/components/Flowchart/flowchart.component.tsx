import React, { Fragment, useEffect } from "react";
import styles from "./flowchart.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";

import { buildCourseNode } from "./flowchart.utils";
import ReactFlow, { Background, Controls } from "react-flow-renderer";

const FlowChart = (): JSX.Element => {
  const $view = useSelector((state: AppState) => state.app.view);

  useEffect(() => {
    //lets make a cute little animation where this slides out left when toggling to schedule view
  }, [$view]);

  return (
    <Fragment>
      <div className={styles.Flowchart}>
        <ReactFlow nodes={[buildCourseNode()]}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </Fragment>
  );
};
export default FlowChart;
