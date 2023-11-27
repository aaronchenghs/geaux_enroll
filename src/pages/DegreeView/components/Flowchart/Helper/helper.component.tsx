import { COURSE_STATUS_COLORS } from "../flowchart.utils";
import styles from "./helper.module.scss";

interface KeyBoxProps {
  color: string;
  name: string;
}

const KeyBox = ({ color, name }: KeyBoxProps): JSX.Element => {
  return (
    <div className={styles.keyBox}>
      <div className={styles.colorBox} style={{ backgroundColor: color }}></div>
      <span className={styles.colorName}>{name.replace(/_/g, " ")}</span>
    </div>
  );
};

export interface HelperProps {
  stateChanger: React.Dispatch<React.SetStateAction<boolean>>;
}

const Helper = (): JSX.Element => {
  return (
    <div className={styles.Helper}>
      <label style={{ color: "gray", fontWeight: "bold" }}>KEY:</label>
      {Object.entries(COURSE_STATUS_COLORS).map(([name, color]) => (
        <KeyBox key={name} color={color} name={name} />
      ))}
    </div>
  );
};

export default Helper;
