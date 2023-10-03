import React from "react";
import styles from "./topbar.module.scss";
import { ScheduleIcon } from "../../assets/topbar/topbar.svgs";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { View, changeView } from "../../store/App/slice";
import { AppState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const TopBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const $view = useSelector((state: AppState) => state.app.view);

  const handleIconClick = (): void => {
    navigate($view === View.Schedule ? "/" : "/schedule");
    dispatch(
      changeView($view === View.Schedule ? View.Flowchart : View.Schedule),
    );
  };

  return (
    <div className={styles.TopBar}>
      This is top bar {$view === View.Schedule ? "Schedule" : "Flowchart"}
      <Button onClick={handleIconClick}>{ScheduleIcon}</Button>
    </div>
  );
};

export default TopBar;
