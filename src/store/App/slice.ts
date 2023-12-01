import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum View {
  Schedule,
  Degree,
}

interface AppState {
  view: View;
  forceRerender: boolean;
}

const INITIAL_STATE: AppState = {
  view: View.Degree,
  forceRerender: false,
};

const slice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    changeView(state, action: PayloadAction<View>) {
      state.view = action.payload;
    },
    forceRerender(state) {
      state.forceRerender = !state.forceRerender;
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const { changeView, forceRerender } = slice.actions;
