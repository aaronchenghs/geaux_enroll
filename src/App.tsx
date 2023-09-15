import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import FlowChart from "./components/Flowchart/flowchart.component";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FlowChart />} />
        {/* <Route path="vita" element={<Vita />} /> */}
      </Routes>
    </div>
  );
};

export default App;
