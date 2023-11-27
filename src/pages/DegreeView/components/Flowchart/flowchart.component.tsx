import { Fragment, useEffect, useMemo, useRef, useState } from "react";
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
import Helper from "./Helper/helper.component";

const FlowChart = (): JSX.Element => {
  const dispatch = useDispatch();
  const $selectedCourseNode = useSelector(
    (state: AppState) => state.degree.selectedCourseNode,
  );
  const $edges = useSelector((state: AppState) => state.degree.edges);

  const [showHelper, setShowHelper] = useState<boolean>(false);

  const infoIconRef = useRef<HTMLDivElement>(null);

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
        <div
          ref={infoIconRef}
          className={styles.infoIcon}
          onPointerOver={(): void => setShowHelper(true)}
          onPointerLeave={(): void => setShowHelper(false)}
        >
          <InfoOutlined style={{ fontSize: "2.75rem" }} />
        </div>
      </div>
      {<CourseModal openCondition={$selectedCourseNode !== null} />}
      {showHelper && (
        <div
          style={{
            position: "absolute",
            top: `${infoIconRef.current?.offsetTop}px`,
            left: `${infoIconRef.current?.offsetLeft}px`,
            transform: "translate(-100%, -100%)",
          }}
        >
          <Helper />
        </div>
      )}
    </Fragment>
  );
};
export default FlowChart;
