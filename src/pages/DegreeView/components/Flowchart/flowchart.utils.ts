import { CourseNodeProps } from "./CourseNode/coursenode.component";
import { v4 } from "uuid";

// Im gonna change this to just take in a course object
// and all the logic will be done in here. Just gotta
// figure out the details first
export const buildCourseNode = (
  borderColor: string,
  onClickHandler: () => void,
): CourseNodeProps => {
  return {
    id: v4(),
    type: "course",
    data: {
      label: "Course Name",
      borderColor: borderColor,
      onClick: onClickHandler,
    },
    // Need to write some logic to determine node position maybe
    position: { x: 100, y: 100 },
  };
};

export enum COURSE_STATUS_COLORS {
  COMPLETED = "#008000",
  IN_PROGRESS = "#FFC300",
  CAN_SCHEDULE = "#2196F3",
  CANNOT_SCHEDULE = "#000000",
}

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
