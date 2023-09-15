import { createSlice } from "@reduxjs/toolkit";

interface EditState {}

const INITIAL_STATE: EditState = {};

const slice = createSlice({
  name: "edit",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const {} = slice.actions;
