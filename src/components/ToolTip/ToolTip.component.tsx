import React from "react";
import styles from "./ToolTip.module.scss";

interface ToolTipProps {
  content: string;
  position: { x: number; y: number };
  isVisible: boolean;
}

export const ToolTip: React.FC<ToolTipProps> = ({
  content,
  position,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={styles.tooltip}
      style={{
        left: `${position.x.toPrecision(2)}px`,
        top: `${position.y.toPrecision(2)}px`,
      }}
    >
      {content}
    </div>
  );
};

export default ToolTip;
