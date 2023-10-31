import StarRating from "./star-rating.component";
import styles from "./star-bar.module.scss";

interface StarBarProps {
  rating: number; // [0-5]
}

const StarBar = ({ rating }: StarBarProps): JSX.Element => {
  const starSize: number = 45;

  return (
    <div className={styles.row}>
      <StarRating
        rating={Math.min(100, rating * 100)}
        size={starSize}
      ></StarRating>
      <StarRating rating={(rating - 1) * 100} size={starSize}></StarRating>
      <StarRating rating={(rating - 2) * 100} size={starSize}></StarRating>
      <StarRating rating={(rating - 3) * 100} size={starSize}></StarRating>
      <StarRating rating={(rating - 4) * 100} size={starSize}></StarRating>
    </div>
  );
};

export default StarBar;
