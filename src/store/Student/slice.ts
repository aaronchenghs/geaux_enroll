import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AaronCheng_INITIAL } from "../../models/student";

const slice = createSlice({
  name: "student",
  initialState: AaronCheng_INITIAL,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const { changeName } = slice.actions;
