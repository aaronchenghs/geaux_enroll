import { configureStore } from "@reduxjs/toolkit";
import { reducer as studentReducer } from "./Student/slice";
import { reducer as libraryReducer } from "./Library/slice";
import { reducer as editReducer } from "./Edit/slice";

const store = configureStore({
  reducer: {
    student: studentReducer,
    library: libraryReducer,
    edit: editReducer,
  },
});

const state = store.getState();
export type AppState = typeof state;

export default store;
