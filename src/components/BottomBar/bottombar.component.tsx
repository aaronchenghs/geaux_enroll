import React, { Fragment } from "react";
import styles from "./bottombar.module.scss";

const BottomBar = (): JSX.Element => {
  return (
    <Fragment>
      <div className={styles.BottomBar}>This is the BottomBar</div>
    </Fragment>
  );
};
export default BottomBar;
