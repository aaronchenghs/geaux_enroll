import { createSlice } from "@reduxjs/toolkit";
import { Course } from "../../models/course";

interface LibraryState {
  courses: Course[];
}

const INITIAL_STATE: LibraryState = {
  courses: [],
};

const slice = createSlice({
  name: "library",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const {} = slice.actions;
