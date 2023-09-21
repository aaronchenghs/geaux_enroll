import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import FlowChart from "./components/Flowchart/flowchart.component";
import Schedule from "./components/Schedule/schedule.component";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FlowChart />} />
        <Route path="schedule" element={<Schedule />} />
      </Routes>
    </div>
  );
};

export default App;
