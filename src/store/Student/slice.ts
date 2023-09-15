import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StudentState {
  name: string;
}

const INITIAL_STATE: StudentState = {
  name: "aaron",
};

const slice = createSlice({
  name: "student",
  initialState: INITIAL_STATE,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const { changeName } = slice.actions;
