import React from "react";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import DegreeView from "./pages/DegreeView/degree-view.component";
import SemesterView from "./pages/SemesterView/semester-view.component";
import BottomBar from "./components/BottomBar/bottombar.component";
import TopBar from "./components/TopBar/topbar.component";
import { Slide, ToastContainer, Zoom } from "react-toastify";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/degree" />} />
        <Route path="/degree" element={<DegreeView />} />
        <Route path="/semester" element={<SemesterView />} />
      </Routes>
      <ToastContainer
        limit={3}
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        transition={Zoom}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
      <BottomBar />
    </div>
  );
};

export default App;
