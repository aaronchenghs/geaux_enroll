import React, { Fragment, useMemo } from "react";
import styles from "./flowchart.module.scss";

import {
  COURSE_STATUS_COLORS,
  buildCourseNode,
  buildDegreeNodes,
  buildEdges,
} from "./flowchart.utils";
import ReactFlow, { Background, Controls, Edge } from "react-flow-renderer";
import CourseModal from "../DegreeModal/degreemodal.component";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { CourseNode } from "./CourseNode/coursenode.component";
import {
  SWEDegreeRequirements,
  SoftwareEngineeringDegree,
} from "../../../../models/database/SWEDegree";
import { v4 } from "uuid";

const FlowChart = (): JSX.Element => {
  const $selectedCourseNode = useSelector(
    (state: AppState) => state.degree.selectedCourseNode,
  );
  const nodes = useMemo(() => buildDegreeNodes(SoftwareEngineeringDegree), []);
  const edges = useMemo(
    () => buildEdges(SoftwareEngineeringDegree.requirements),
    [],
  );

  const testEdge: Edge = useMemo(() => {
    return {
      id: nodes[0].id + "-" + nodes[1].id,
      source: nodes[0].id,
      target: nodes[1].id,
    };
  }, []);

  /**
   * Gonna be so real with you I have no idea how I'm supposed to
   * type this to work with my custom component. Call me a hypocrite
   * but I'm using any here because i'm over it.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodeTypes = useMemo(() => ({ course: CourseNode as any }), []);

  return (
    <Fragment>
      <div className={styles.Flowchart}>
        <ReactFlow
          nodes={[...nodes]}
          edges={[testEdge]}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      {<CourseModal openCondition={$selectedCourseNode !== null} />}
    </Fragment>
  );
};
export default FlowChart;
