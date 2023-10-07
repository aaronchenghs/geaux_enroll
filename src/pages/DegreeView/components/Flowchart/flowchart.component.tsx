import React, { Fragment } from "react";
import styles from "./flowchart.module.scss";

import { buildCourseNode } from "./flowchart.utils";
import ReactFlow, { Background, Controls } from "react-flow-renderer";
import DegreeModal from "../DegreeModal/degreemodal.component";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/store";

const FlowChart = (): JSX.Element => {
  const $selectedCourseNode = useSelector(
    (state: AppState) => state.degree.selectedCourseNode,
  );

  return (
    <Fragment>
      <div className={styles.Flowchart}>
        <ReactFlow nodes={[buildCourseNode()]}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      {$selectedCourseNode && <DegreeModal />}
    </Fragment>
  );
};
export default FlowChart;
