import React, { Fragment } from "react";
import styles from "./bottombar.module.scss";
import { IconButton } from "@mui/material";
import { AccountBox } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";

const BottomBar = (): JSX.Element => {
  const $student = useSelector((state: AppState) => state.student);

  return (
    <Fragment>
      <div className={styles.BottomBar}>
        <h2 className={styles.name}>
          {$student.firstName}{" "}
          {$student.middleName ? $student.middleName[0] : ""}{" "}
          {$student.lastName}{" "}
        </h2>
        <IconButton className={styles.profileButton}>
          <AccountBox />
        </IconButton>
      </div>
    </Fragment>
  );
};

export default BottomBar;
