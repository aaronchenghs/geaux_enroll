import React, { useState } from "react";
import styles from "./bottombar.module.scss";
import { IconButton } from "@mui/material";
import { AccountBox, ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import BottomBarTable from "./BottomBarTable/bottombartable.component";

const BottomBar = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const $student = useSelector((state: AppState) => state.student);

  const toggleExpand = (): void => setIsExpanded(!isExpanded);

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
      </div>
      {isExpanded && (
        <div className={styles.content}>
          <BottomBarTable />
        </div>
      )}
    </div>
  );
};

export default BottomBar;
