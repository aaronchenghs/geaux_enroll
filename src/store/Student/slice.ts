import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "../../models/student";

const INITIAL_STATE: Student = {
  id: "",
  firstName: "",
  lastName: "",
  majors: [],
  minors: [],
  gpa: 0,
  completedCourses: [],
};

const slice = createSlice({
  name: "student",
  initialState: INITIAL_STATE,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const { changeName } = slice.actions;
