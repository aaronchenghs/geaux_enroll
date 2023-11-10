import React from "react";
import {
  EdgeProps,
  MarkerType,
  getBezierPath,
  getMarkerEnd,
} from "react-flow-renderer";

import "./CourseEdge.scss";

export interface CourseEdgeProps extends EdgeProps {
  arrowHeadType: MarkerType;
  markerEndId: string;
}

const CourseEdge: React.FC<CourseEdgeProps> = (props: CourseEdgeProps) => {
  const {
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    arrowHeadType,
    id,
  } = props;

  // Calculate the path of the edge
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  // Define the arrow marker
  const markerEnd = getMarkerEnd(arrowHeadType, `end-${id}`);

  return (
    <>
      <defs>
        <marker
          id={`end-${id}`}
          viewBox="0 -10 20 20"
          refX="20"
          refY="0"
          markerWidth="12"
          markerHeight="12"
          orient="auto-start-reverse"
        >
          <path d="M0,-10 L20,0 L0,10" fill="#222" />{" "}
        </marker>
      </defs>

      <path
        id={id}
        className="react-flow__edge-path customPath"
        d={edgePath}
        markerEnd={markerEnd}
        stroke="#000000"
        strokeWidth={3}
        color="#000000"
      />
    </>
  );
};

export default CourseEdge;
