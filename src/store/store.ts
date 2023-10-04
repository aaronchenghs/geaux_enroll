import { configureStore } from "@reduxjs/toolkit";
import { reducer as studentReducer } from "./Student/slice";
import { reducer as libraryReducer } from "./Library/slice";
import { reducer as editReducer } from "./Edit/slice";
import { reducer as appReducer } from "./App/slice";
import { semester_reducer } from "../pages/SemesterView/semester-slice";

const store = configureStore({
  reducer: {
    student: studentReducer,
    library: libraryReducer,
    edit: editReducer,
    app: appReducer,
    semester: semester_reducer,
  },
});

const state = store.getState();
export type AppState = typeof state;

export default store;
