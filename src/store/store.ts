import { configureStore } from "@reduxjs/toolkit";
import { reducer as studentReducer } from "./Student/slice";

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

const state = store.getState();
export type AppState = typeof state;

export default store;
