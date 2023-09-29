import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import FlowChart from "./components/Flowchart/flowchart.component";
import Schedule from "./components/Schedule/schedule.component";
import TopBar from "./components/TopBar/topbar.component";
import BottomBar from "./components/BottomBar/bottombar.component";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <TopBar />
      <div className="focusedContent">
        <Routes>
          <Route path="/" element={<FlowChart />} index />
          <Route path="schedule" element={<Schedule />} />
        </Routes>
      </div>
      <BottomBar />
    </div>
  );
};

export default App;
