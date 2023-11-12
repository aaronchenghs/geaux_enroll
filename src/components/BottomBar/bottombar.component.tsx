import React, { Fragment } from "react";
import styles from "./bottombar.module.scss";
import { Button, IconButton } from "@mui/material";
import { AccountBox, Send } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { View } from "../../store/App/slice";
import { Tooltip } from "react-tooltip";

const BottomBar = (): JSX.Element => {
  const $student = useSelector((state: AppState) => state.student);

  // This is so dirty not making a differnt component and all that, but I will not be intimidated to write bad code, this is my truth

  const completeSchedulingButton: JSX.Element | null = useSelector(
    (state: AppState) => {
      if (state.app.view != View.Schedule) return null;

      const shouldAllowSubmit = state.semester.coursesToSchedule.reduce(
        (prev, current) => {
          return prev && current.section != null;
        },
        true,
      );

      return (
        <Button
          className={`${styles.submitButton} ${
            shouldAllowSubmit ? "" : styles.inactive
          }`}
          variant="outlined"
          data-tooltip-id="submit-btn"
          data-tooltip-content={
            shouldAllowSubmit ? null : "Schedule all courses before submiting"
          }
        >
          <Tooltip id="submit-btn" hidden={shouldAllowSubmit} /> Submit Schedule
          Request
        </Button>
      );
    },
  );

  return (
    <Fragment>
      <div className={styles.BottomBar}>
        <IconButton className={styles.profileButton}>
          <AccountBox />
        </IconButton>
        <h2 className={styles.name}>
          {$student.firstName}{" "}
          {$student.middleName ? $student.middleName[0] : ""}{" "}
          {$student.lastName}{" "}
        </h2>
        {completeSchedulingButton}
      </div>
    </Fragment>
  );
};

export default BottomBar;
