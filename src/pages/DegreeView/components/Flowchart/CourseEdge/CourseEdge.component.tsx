import React, { useMemo } from "react";
import {
  EdgeProps,
  MarkerType,
  getBezierPath,
  getMarkerEnd,
} from "react-flow-renderer";

import "./CourseEdge.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";

export interface CourseEdgeProps extends EdgeProps {
  arrowHeadType: MarkerType;
  markerEndId: string;
}

const CourseEdge: React.FC<CourseEdgeProps> = (props: CourseEdgeProps) => {
  const { source, target } = props;

  const $hoveredCourseNode = useSelector(
    (state: AppState) => state.degree.hoveredCourseNodeID,
  );

  const visible = useMemo(() => {
    return (
      $hoveredCourseNode === null ||
      $hoveredCourseNode === source ||
      $hoveredCourseNode === target
    );
  }, [$hoveredCourseNode]);

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

  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const markerEnd = getMarkerEnd(arrowHeadType, `end-${id}`);

  // Determine the opacity based on the visibility
  const edgeOpacity = visible ? 1 : 0.1;

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
          <path d="M0,-10 L20,0 L0,10" fill="#222" />
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
        style={{
          opacity: edgeOpacity,
          transition: "opacity 0.1s ease-in-out",
        }}
      />
    </>
  );
};

export default CourseEdge;
