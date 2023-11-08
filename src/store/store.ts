import { configureStore } from "@reduxjs/toolkit";
import { reducer as studentReducer } from "./Student/slice";
import { reducer as editReducer } from "./Edit/slice";
import { reducer as appReducer } from "./App/slice";
import { semester_reducer } from "./Semester/semester-slice";
import { reducer as degreeReducer } from "./Degree/degree-slice";

const store = configureStore({
  reducer: {
    student: studentReducer,
    edit: editReducer,
    app: appReducer,
    semester: semester_reducer,
    degree: degreeReducer,
  },
});

const state = store.getState();
export type AppState = typeof state;

export default store;
