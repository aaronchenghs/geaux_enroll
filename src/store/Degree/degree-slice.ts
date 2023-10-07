import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Course } from "../../models/course";

interface DegreeState {
  selectedCourseNode: Course | null;
}

const INITIAL_STATE: DegreeState = {
  selectedCourseNode: null,
};

const slice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedCourseNode(state, action: PayloadAction<Course | null>) {
      state.selectedCourseNode = action.payload;
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const { setSelectedCourseNode } = slice.actions;
