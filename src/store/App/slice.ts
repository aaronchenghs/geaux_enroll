import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum View {
  Schedule,
  Flowchart,
}

interface AppState {
  view: View;
}

const INITIAL_STATE: AppState = {
  view: View.Flowchart,
};

const slice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    changeView(state, action: PayloadAction<View>) {
      state.view = action.payload;
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const { changeView } = slice.actions;
