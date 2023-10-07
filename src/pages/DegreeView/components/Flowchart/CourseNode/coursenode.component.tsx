import { Node } from "react-flow-renderer";
import { COURSE_STATUS_COLORS, darkenColor } from "../flowchart.utils";
import styles from "./coursenode.module.scss";
import { useMemo } from "react";

export interface CourseData {
  label: string;
  borderColor?: string;
  onClick?: () => void;
}

// Use the Node type for CourseNodeProps
export interface CourseNodeProps extends Node<CourseData> {}

export const CourseNode: React.FC<CourseNodeProps> = ({
  data,
}: CourseNodeProps) => {
  const borderColor: string = useMemo(() => {
    return data.borderColor ?? COURSE_STATUS_COLORS.CANNOT_SCHEDULE;
  }, []);
  return (
    <div
      onClick={data.onClick}
      className={styles.courseNode}
      style={
        {
          "--initialBorderColor": borderColor || "black",
          "--darkenedColor": darkenColor(borderColor, 18),
        } as React.CSSProperties
      }
    >
      <h4>{data.label}</h4>
    </div>
  );
};

export default CourseNode;
