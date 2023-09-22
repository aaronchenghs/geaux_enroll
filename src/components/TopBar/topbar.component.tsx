import React, { Fragment } from "react";
import styles from "./topbar.module.scss";

const TopBar = (): JSX.Element => {
  return (
    <Fragment>
      <div className={styles.TopBar}>This is the top bar</div>
    </Fragment>
  );
};
export default TopBar;
