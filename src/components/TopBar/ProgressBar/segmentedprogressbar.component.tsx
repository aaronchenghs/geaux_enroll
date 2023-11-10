import React, { useState } from "react";
import styles from "./segmentedprogressbar.module.scss";
import { darkenColor } from "../../../pages/DegreeView/components/Flowchart/flowchart.utils";
import ToolTip from "../../ToolTip/ToolTip.component";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";

export interface segment {
  id: string;
  label: string;
  color: string;
  value: number;
  tooltip: string;
}

interface Props {
  segments: segment[];
  max: number; // TODO: This parameter does nothing, but probably should
  isBlankTooltipEnabled: boolean;
}

const SegmentedProgressBar = ({
  segments,
  max,
  isBlankTooltipEnabled = true,
}: Props): JSX.Element => {
  const $degree = useSelector((state: AppState) => state.student.majors[0]);

  const [tooltip, setTooltip] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null,
  );

  const showBlankSegmentToolTip = (
    e: React.MouseEvent<HTMLDivElement>,
  ): void => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();

    const hoursRemaining =
      $degree.hours -
      segments.reduce((acc, course) => acc + (course.value ?? 0), 0);
    const message = `${hoursRemaining} credit hours remaining to complete ${$degree.concentration}`;

    setTooltip(message);
    setTooltipPos({ x: rect.x * 1.1, y: rect.bottom });
  };

  const showSegmentToolTip = (
    e: React.MouseEvent<HTMLDivElement>,
    segment: segment,
  ): void => {
    e.stopPropagation();
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
      <div
        className={styles.progressBarContainer}
        onMouseOver={
          isBlankTooltipEnabled
            ? (e): void => showBlankSegmentToolTip(e)
            : (e): void => {}
        }
        onMouseOut={hideTooltip}
      >
        {segments.map((segment, index) => (
          <div
            key={index}
            className={styles.progressBarSegment}
            style={
              {
                flexBasis: `${(segment.value / max) * 100}%`,
                backgroundColor: segment.color,
                "--darkenedColor": darkenColor(segment.color, 30),
              } as React.CSSProperties
            }
            onMouseOver={(e): void => showSegmentToolTip(e, segment)}
            onMouseOut={hideTooltip}
          ></div>
        ))}

        <ToolTip
          content={tooltip || ""}
          position={tooltipPos || { x: 0, y: 0 }}
          isVisible={!!tooltip}
        />
      </div>
    </>
  );
};

export default SegmentedProgressBar;
