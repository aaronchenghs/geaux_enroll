import React, { useMemo, useState } from "react";
import styles from "./bottombar.module.scss";
import { IconButton } from "@mui/material";
import { AccountBox, ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/store";
import BottomBarTable from "./BottomBarTable/bottombartable.component";
import { Button } from "@mui/material";
import { View, changeView } from "../../store/App/slice";
import { Tooltip } from "react-tooltip";
import {
  clearScheduledSections,
  returnFromCurrentSelection,
} from "../../store/Semester/semester-slice";
import { addScheduledSections } from "../../store/Student/slice";

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const BottomBar = (): JSX.Element => {
  const dispatch = useDispatch();

  const $student = useSelector((state: AppState) => state.student);
  const $view = useSelector((state: AppState) => state.app.view);
  const $coursesToSchedule = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );
  const $scheduledSections = useSelector(
    (state: AppState) => state.semester.scheduledSections,
  );

  const [isExpanded, setIsExpanded] = useState(false);

  const currentDateAndTime = formatDate(new Date());

  const toggleExpand = (): void => setIsExpanded(!isExpanded);
  // This is so dirty not making a differnt component and all that, but I will not be intimidated to write bad code, this is my truth

  const completeSchedulingButton: JSX.Element | null = useMemo(() => {
    if ($view !== View.Schedule || $coursesToSchedule.length === 0)
      return <></>;

    const shouldAllowSubmit = $coursesToSchedule.reduce((prev, current) => {
      return prev && current.section !== null;
    }, true);

    const submitSections = (): void => {
      if (!shouldAllowSubmit) return;
      dispatch(returnFromCurrentSelection());
      dispatch(addScheduledSections($scheduledSections));
      dispatch(clearScheduledSections());

      setTimeout(() => {
        dispatch(changeView(View.Degree));
      }, 50);
    };

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
        onClick={submitSections}
      >
        <Tooltip id="submit-btn" hidden={shouldAllowSubmit} /> Submit Schedule
        Request
      </Button>
    );
  }, [$view, $coursesToSchedule, $scheduledSections]);

  return (
    <div className={`${styles.BottomBar} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.buttonNameContainer}>
        <IconButton className={styles.profileButton} onClick={toggleExpand}>
          <AccountBox />
          {isExpanded ? <ArrowDropDown /> : <ArrowDropUp />}
        </IconButton>
        <h2 className={styles.name}>
          {$student.firstName}{" "}
          {$student.middleName ? $student.middleName[0] : ""}{" "}
          {$student.lastName}
        </h2>
        {completeSchedulingButton}
      </div>
      {isExpanded && (
        <div className={styles.content}>
          <BottomBarTable
            data={[
              { title: "College", data: "Engineering" },
              {
                title: "Degree",
                data: `Computer Science - ${$student.majors[0].concentration}`,
              },
              { title: "Program", data: "ENGINEERING" },
              {
                title: "Minor(s)",
                data: $student.minors.length === 0 ? "N/A" : $student.minors[0],
              },
              { title: "Date", data: currentDateAndTime },
              { title: "Catalog", data: "2024" },
              { title: "Campus", data: "LSU" },
            ]}
          />

          <BottomBarTable
            data={[
              {
                title: "Cumulative Hours Required",
                data: $student.majors[0].hours,
              },
              {
                title: "LSU Hours Required",
                data: 30,
              },
              {
                title: "Carried",
                data: `QP Calculation here`,
              },
              {
                title: "Quality Points",
                data: `QP Calculation here`,
              },
              {
                title: "GPA",
                data: `4.0`,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default BottomBar;
