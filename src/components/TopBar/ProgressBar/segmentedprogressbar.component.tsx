import React, { useState } from "react";
import styles from "./segmentedprogressbar.module.scss";

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

/**
 * darkenColor(string, number)
 *
 * @param color Color as a hex code
 * @param percent % to darken by
 * @returns New darkened hex code
 */
export const darkenColor = (color: string, percent: number): string => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  let R = (num >> 16) - amt;
  let G = ((num >> 8) & 0x00ff) - amt;
  let B = (num & 0x0000ff) - amt;

  // Ensure values are bounded by 0 and 255
  R = R < 0 ? 0 : R > 255 ? 255 : R;
  G = G < 0 ? 0 : G > 255 ? 255 : G;
  B = B < 0 ? 0 : B > 255 ? 255 : B;

  return `#${((1 << 24) + (R << 16) + (G << 8) + B)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

export default SegmentedProgressBar;
