import React, { useEffect, useState } from "react";
import { CourseList } from "./components/Sidepane/CourseList/course-list.component";
import { AppState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { View } from "../../store/App/slice";

import styles from "./semester-view.module.scss";
import { WeekChart } from "./components/WeekChart/week-chart.component";
import { Course } from "../../models/course";
import { SectionList } from "./components/Sidepane/SectionList/section-list.component";
import Sidepane from "./components/Sidepane/sidepane.module";
import { ToastContainer, toast } from "react-toastify";

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
      <div className={styles.myrow}>
        <div className={styles.course_list}>
          <Sidepane />
        </div>
        <div className={styles.week_chart}>
          <WeekChart />
          <ToastContainer
            limit={3}
            position="bottom-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
};

export default SemesterView;
