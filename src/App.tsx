import React from "react";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import DegreeView from "./pages/DegreeView/degree-view.component";
import SemesterView from "./pages/SemesterView/semester-view.component";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/degree" />} />
        <Route path="/degree" element={<DegreeView />} />
        <Route path="/semester" element={<SemesterView />} />
      </Routes>
    </div>
  );
};

export default App;
