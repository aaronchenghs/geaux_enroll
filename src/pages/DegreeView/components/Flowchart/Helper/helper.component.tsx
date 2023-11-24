import { Dispatch, SetStateAction } from "react";
import styles from "./helper.module.scss";

export interface HelperProps {
  stateChanger: Dispatch<SetStateAction<boolean>>;
}

const Helper = (): JSX.Element => {
  return <div className={styles.Helper}>This is the key</div>;
};
export default Helper;
