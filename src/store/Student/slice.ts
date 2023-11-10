import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_INITAL_STUDENT } from "../../models/student";

const slice = createSlice({
  name: "student",
  initialState: DEFAULT_INITAL_STUDENT,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const { changeName } = slice.actions;
