import React from "react";
import { Star } from "@mui/icons-material";

import styles from "./star-rating.module.scss";

export interface Props {
  rating: number;
  size: number;
}
//https://stackoverflow.com/questions/74523990/how-to-fill-a-non-quadrilateral-shape-i-e-a-star-based-on-a-percentage-using
const StarRating = ({ rating = 50, size = 200 }: Props): JSX.Element => {
  if (rating < 0) rating = 0;
  if (rating > 100) rating = 100;

  rating = (rating / 100) * size;

  return (
    <div className={styles.parent}>
      <div className={styles.starContainer}>
        <Star style={{ color: "#e4e5e9", fontSize: size }} />
      </div>
      <div className={styles.starFill}>
        <div style={{ width: rating, overflow: "hidden" }}>
          <Star style={{ color: "#ffc107", fontSize: size }} />
        </div>
        {/* transparent div to reserve the complementary spacing */}
        <div style={{ width: size }}></div>
      </div>
    </div>
  );
};

export default StarRating;
