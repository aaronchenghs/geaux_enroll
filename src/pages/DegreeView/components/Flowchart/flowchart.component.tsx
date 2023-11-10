import { Fragment, useMemo } from "react";
import styles from "./flowchart.module.scss";

import { buildDegreeNodes, buildEdges } from "./flowchart.utils";
import ReactFlow, { Background, Controls, Edge } from "react-flow-renderer";
import CourseModal from "../DegreeModal/degreemodal.component";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { CourseNode } from "./CourseNode/coursenode.component";
import { SoftwareEngineeringDegree } from "../../../../models/database/SWEDegree";
import CourseEdge from "./CourseEdge/CourseEdge.component";

const FlowChart = (): JSX.Element => {
  const $selectedCourseNode = useSelector(
    (state: AppState) => state.degree.selectedCourseNode,
  );
  const nodes = useMemo(() => buildDegreeNodes(SoftwareEngineeringDegree), []);
  const edges = useMemo(
    () =>
      buildEdges(nodes).map((edge) => ({
        ...edge,
        type: "course",
        sourceHandle: "outputHandle",
        targetHandle: "inputHandle",
      })),
    [nodes],
  );

  const testEdge: Edge = useMemo(() => {
    console.log(nodes[0].id, " ", nodes[1].id);
    return {
      type: "course",
      id: nodes[0].id + "-" + nodes[1].id,
      source: nodes[0].id,
      sourceHandle: "outputHandle",
      target: nodes[5].id,
      targetHandle: "inputHandle",
    };
  }, [nodes]);

  /**
   * Gonna be so real with you I have no idea how I'm supposed to
   * type this to work with my custom component. Call me a hypocrite
   * but I'm using any here because i'm over it.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodeTypes = useMemo(() => ({ course: CourseNode as any }), []);
  const edgeTypes = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    course: CourseEdge as any,
  };

  return (
    <Fragment>
      <div className={styles.Flowchart}>
        <ReactFlow
          nodes={[...nodes]}
          edges={[...edges]}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
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
