import { Fragment, useEffect, useMemo } from "react";
import styles from "./flowchart.module.scss";

import { buildDegreeNodes, buildEdges } from "./flowchart.utils";
import ReactFlow, { Background, Controls } from "react-flow-renderer";
import CourseModal from "../DegreeModal/degreemodal.component";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { CourseNode } from "./CourseNode/coursenode.component";
import { SoftwareEngineeringDegree } from "../../../../models/database/SWEDegree";
import CourseEdge from "./CourseEdge/CourseEdge.component";
import { setEdges } from "../../../../store/Degree/degree-slice";
import { InfoOutlined } from "@mui/icons-material";

const FlowChart = (): JSX.Element => {
  const dispatch = useDispatch();
  const $selectedCourseNode = useSelector(
    (state: AppState) => state.degree.selectedCourseNode,
  );
  const $edges = useSelector((state: AppState) => state.degree.edges);
  const nodes = useMemo(() => buildDegreeNodes(SoftwareEngineeringDegree), []);

  useEffect(() => {
    const edges = buildEdges(nodes).map((edge) => ({
      ...edge,
      type: "course",
      sourceHandle: "outputHandle",
      targetHandle: "inputHandle",
    }));
    dispatch(setEdges(edges));
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
          edges={[...$edges]}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
        {/* Add your info icon here */}
        <div className={styles.infoIcon}>
          <InfoOutlined style={{ fontSize: "2.75rem" }} />
          {/* If using a different method to render the icon, adjust this part */}
        </div>
      </div>
      {<CourseModal openCondition={$selectedCourseNode !== null} />}
    </Fragment>
  );
};
export default FlowChart;
