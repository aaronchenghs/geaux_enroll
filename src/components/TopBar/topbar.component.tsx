import React, { useEffect } from "react";
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
import { toggleView } from "./topbar.utils";

const topBarAnimationTime = 750;

const TopBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const $view = useSelector((state: AppState) => state.app.view);

  // has rendered the first time? don't play animation
  const [hasRendered, setHasRendered] = React.useState<boolean>(false);

  // current content to be rendered on top bar
  const [content, setCurrentContent] = React.useState<JSX.Element>(
    toggleView() === View.Degree ? (
      <ScheduleTopBarContent />
    ) : (
      <DegreeTopBarContent />
    ),
  );

  const handleIconClick = (): void => {
    dispatch(changeView(toggleView()));
  };

  const [animate, setAnimate] = React.useState(false);
  useEffect(() => {
    if (!hasRendered) {
      setHasRendered(true);
      return;
    }

    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, topBarAnimationTime);

    return () => clearTimeout(timer);
  }, [$view]);

  useEffect(() => {
    // Avoid content switch on initial render
    if (!hasRendered) return;

    const timer = setTimeout(() => {
      setCurrentContent(
        toggleView() === View.Degree ? (
          <ScheduleTopBarContent />
        ) : (
          <DegreeTopBarContent />
        ),
      );
    }, topBarAnimationTime / 2);

    return () => clearTimeout(timer);
  }, [$view]);

  return (
    <div className={styles.TopBar}>
      <div className={styles.topBarContent}>
        <Button className={styles.navButton} onClick={handleIconClick}>
          {toggleView() === View.Degree ? <Share /> : <CalendarToday />}
        </Button>
        <div
          className={`${styles.specialContent} ${
            animate ? styles.animate : ""
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
