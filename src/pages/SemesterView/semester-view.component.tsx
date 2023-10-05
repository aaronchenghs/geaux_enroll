import React, { useEffect, useState } from "react";
import { CourseList } from "./components/CourseList/course-list.component";
import { AppState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { View } from "../../store/App/slice";

import styles from "./semester-view.module.scss";

const SemesterView = (): JSX.Element => {
  const navigate = useNavigate();
  const $view = useSelector((state: AppState) => state.app.view);
  const [isMounted, setIsMounted] = useState(false);

  // Animation Handler
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 50);

    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if ($view === View.Schedule) return;

    setTimeout(() => {
      navigate("/degree");
    }, 350);
  }, [$view]);

  return (
    <div
      className={`${styles.SemesterView} 
                  ${isMounted ? styles.slideIn : ""} 
                  ${$view === View.Degree ? styles.slideOut : ""}`}
    >
      <CourseList />
    </div>
  );
};

export default SemesterView;
