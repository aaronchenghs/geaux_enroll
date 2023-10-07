import React, { useState } from "react";
import styles from "./segmentedprogressbar.module.scss";
import { darkenColor } from "../../../pages/DegreeView/components/Flowchart/flowchart.utils";

export interface segment {
  id: string;
  label: string;
  color: string;
  value: number;
  tooltip: string;
}

interface Props {
  segments: segment[];
  max: number;
}

const SegmentedProgressBar = ({ segments }: Props): JSX.Element => {
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null,
  );

  const showTooltip = (
    e: React.MouseEvent<HTMLDivElement>,
    segment: segment,
  ): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip(segment.tooltip);
    setTooltipPos({ x: rect.x - 4, y: rect.bottom });
  };

  const hideTooltip = (): void => {
    setTooltip(null);
    setTooltipPos(null);
  };

  return (
    <>
      <div className={styles.progressBarContainer}>
        {segments.map((segment, index) => (
          <div
            key={index}
            className={styles.progressBarSegment}
            style={
              {
                flexBasis: `${segment.value}%`,
                backgroundColor: segment.color,
                "--darkenedColor": darkenColor(segment.color, 30),
              } as React.CSSProperties
            }
            onMouseOver={(e): void => showTooltip(e, segment)}
            onMouseOut={hideTooltip}
          ></div>
        ))}
        {tooltip && tooltipPos && (
          <div
            className={styles.tooltip}
            style={{
              left: `${tooltipPos.x.toPrecision(2)}px`,
              top: `${tooltipPos.y.toPrecision(2)}px`,
            }}
          >
            {tooltip}
          </div>
        )}
      </div>
    </>
  );
};

export default SegmentedProgressBar;
