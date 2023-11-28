/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Course } from "../../models/course";
import { Edge } from "react-flow-renderer";

interface DegreeState {
  selectedCourseNode: Course | null;
  hoveredCourseNodeID: string | null;
  edges: Edge<any>[];
}

const INITIAL_STATE: DegreeState = {
  selectedCourseNode: null,
  hoveredCourseNodeID: null,
  edges: [],
};

const slice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedCourseNode(state, action: PayloadAction<Course | null>) {
      state.selectedCourseNode = action.payload;
    },
    setHoveredCourseNodeID(state, action: PayloadAction<string | null>) {
      state.hoveredCourseNodeID = action.payload;
    },
    setEdges(state, action: PayloadAction<Edge<any>[]>) {
      state.edges = action.payload;
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const { setSelectedCourseNode, setHoveredCourseNodeID, setEdges } =
  slice.actions;
