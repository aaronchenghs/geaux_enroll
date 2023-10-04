import React from "react";
import styles from "./topbar.module.scss";
import { ScheduleIcon } from "../../../../assets/topbar/topbar.svgs";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  dummy_courses,
  setCoursesToSchedule,
} from "../../../SemesterView/semester-slice";

const TopBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const $view = useSelector((state: AppState) => state.app.view);

  const handleIconClick = (): void => {
    dispatch(setCoursesToSchedule(dummy_courses));
    navigate("/semester");
  };

  return (
    <div className={styles.TopBar}>
      This is top bar of the degree flowchart
      <Button onClick={handleIconClick}>{ScheduleIcon}</Button>
    </div>
  );
};

export default TopBar;
