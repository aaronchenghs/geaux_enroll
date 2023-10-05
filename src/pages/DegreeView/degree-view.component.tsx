import React, { useEffect, useState } from "react";
import FlowChart from "./components/Flowchart/flowchart.component";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { View } from "../../store/App/slice";
import { useNavigate } from "react-router-dom";
// styles
import styles from "./degree-view.module.scss";

const DegreeView = (): JSX.Element => {
  const navigate = useNavigate();
  const $view = useSelector((state: AppState) => state.app.view);
  const [isMounted, setIsMounted] = useState(false);

  // Animation Handler
  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if ($view === View.Degree) return;

    setTimeout(() => {
      navigate("/semester");
    }, 350);
  }, [$view]);

  return (
    <div
      className={`${styles.DegreeView} 
                  ${isMounted ? styles.slideIn : ""} 
                  ${$view === View.Schedule ? styles.slideOut : ""}`}
    >
      <FlowChart />
    </div>
  );
};

export default DegreeView;
