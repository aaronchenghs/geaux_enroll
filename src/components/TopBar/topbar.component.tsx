import React from "react";
import { CalendarToday, Share } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  dummy_courses,
  setCoursesToSchedule,
} from "../../store/Semester/semester-slice";
import { View, changeView } from "../../store/App/slice";
import { AppState } from "../../store/store";
// styles
import styles from "./topbar.module.scss";
import DegreeTopBarContent from "./DegreeTopBarContent/degreetopbarcontent.component";
import ScheduleTopBarContent from "./ScheduleTopBarContent/scheduletopbarcontent.component";

const TopBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const $view = useSelector((state: AppState) => state.app.view);

  const toggleView = (): View => {
    const toggleMapping = {
      [View.Degree]: View.Schedule,
      [View.Schedule]: View.Degree,
    };
    return toggleMapping[$view];
  };

  const handleIconClick = (): void => {
    dispatch(setCoursesToSchedule(dummy_courses));
    dispatch(changeView(toggleView()));
  };

  return (
    <div className={styles.TopBar}>
      <div className={styles.topBarContent}>
        <Button className={styles.navButton} onClick={handleIconClick}>
          {toggleView() === View.Degree ? <Share /> : <CalendarToday />}
        </Button>
        <div className={styles.specialContent}>
          {toggleView() === View.Degree ? (
            <ScheduleTopBarContent />
          ) : (
            <DegreeTopBarContent />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
