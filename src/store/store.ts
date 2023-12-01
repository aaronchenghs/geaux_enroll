import { configureStore } from "@reduxjs/toolkit";
import { reducer as studentReducer } from "./Student/slice";
import { reducer as appReducer } from "./App/slice";
import { semester_reducer } from "./Semester/semester-slice";
import { reducer as degreeReducer } from "./Degree/degree-slice";

const store = configureStore({
  reducer: {
    student: studentReducer,
    app: appReducer,
    semester: semester_reducer,
    degree: degreeReducer,
  },
});

const state = store.getState();
export type AppState = typeof state;

export default store;
