import React, { Fragment } from "react";
import styles from "./flowchart.module.scss";

import { buildCourseNode } from "./flowchart.utils";
import ReactFlow, { Background, Controls } from "react-flow-renderer";

const FlowChart = (): JSX.Element => {
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
