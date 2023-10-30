import { configureStore } from "@reduxjs/toolkit";
import { reducer as studentReducer } from "./Student/slice";
import { reducer as editReducer } from "./Edit/slice";
import { reducer as appReducer } from "./App/slice";
import { semester_reducer } from "./Semester/semester-slice";
import { reducer as degreeReducer } from "./Degree/degree-slice";
import { ToastOptions } from "react-toastify";

const store = configureStore({
  reducer: {
    student: studentReducer,
    edit: editReducer,
    app: appReducer,
    semester: semester_reducer,
    degree: degreeReducer,
  },
});

export const defaultToastSuccessOptions: ToastOptions = {
  position: "bottom-center",
  autoClose: 3000,
  closeButton: false,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: "colored",
};

const state = store.getState();
export type AppState = typeof state;

export default store;
