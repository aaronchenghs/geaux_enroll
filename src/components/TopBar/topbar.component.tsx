import React, { useEffect, useRef, useState } from "react";
import { CalendarToday, Share } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { View, changeView } from "../../store/App/slice";
import { Tooltip, Overlay } from "react-bootstrap";

import { AppState } from "../../store/store";
// styles
import styles from "./topbar.module.scss";
import DegreeTopBarContent from "./DegreeTopBarContent/degreetopbarcontent.component";
import ScheduleTopBarContent from "./ScheduleTopBarContent/scheduletopbarcontent.component";
import { toggleView } from "./topbar.utils";
import { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

const topBarAnimationTime = 750;

const TopBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const $view = useSelector((state: AppState) => state.app.view);
  const $coursesToSchedule = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );
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

  const [animate, setAnimate] = React.useState(false);
  const [buttonGlow, setButtonGlow] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [target, setTarget] = useState(null);

  const ref = useRef(null);

  // useEffect for button glow
  useEffect(() => {
    setButtonGlow($coursesToSchedule.length > 0);
  }, [$coursesToSchedule.length]);

  const prevLengthRef = useRef($coursesToSchedule.length);
  // useEffect for rendering schedule section prompt
  useEffect(() => {
    const currentLength = $coursesToSchedule.length;

    if (currentLength > prevLengthRef.current) {
      setShowTooltip(true);
      setTarget(ref.current);

      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
        prevLengthRef.current = currentLength;
      };
    }

    prevLengthRef.current = currentLength;
  }, [$coursesToSchedule.length]);

  // useEffect for transition animation
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

  // useEffect for changing views
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

  const handleIconClick = (): void => {
    dispatch(changeView(toggleView()));
  };

  return (
    <div className={styles.TopBar}>
      <div className={styles.topBarContent}>
        <Button
          ref={ref}
          className={`${styles.navButton} ${
            buttonGlow && $view === View.Degree && styles.glowingNavButton
          }`}
          onClick={handleIconClick}
        >
          {toggleView() === View.Degree ? <Share /> : <CalendarToday />}
        </Button>
        <Overlay target={target} show={showTooltip} placement="bottom">
          {(props: OverlayInjectedProps): JSX.Element => (
            <Tooltip id="button-tooltip" {...props}>
              Schedule a section for{" "}
              {
                $coursesToSchedule[$coursesToSchedule.length - 1]
                  .courseAbreviation
              }
            </Tooltip>
          )}
        </Overlay>

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
