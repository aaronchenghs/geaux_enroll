import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_INITAL_STUDENT } from "../../models/student";
import { Section } from "../../models/section";
import { Course, Grade } from "../../models/course";

const slice = createSlice({
  name: "student",
  initialState: DEFAULT_INITAL_STUDENT,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    dropCourse(state, action: PayloadAction<Course>) {
      state.scheduledCourses = state.scheduledCourses.filter(
        (section) => !section.course.equals(action.payload),
      );
    },

    addScheduledSections(state, action: PayloadAction<Section[]>) {
      const addedCourses = action.payload;

      // Filter out courses that are already scheduled
      const newCourses = addedCourses.filter(
        (additionalSection) =>
          !state.scheduledCourses.some((section) =>
            section.course.equals(additionalSection.course),
          ),
      );

      // Concatenate the new courses with the existing ones
      state.scheduledCourses = [...state.scheduledCourses, ...newCourses];
    },
    adminPassAllInProgressClasses(state) {
      state.scheduledCourses.forEach((section) => {
        if (section.course.grade === null) {
          section.course.grade = Grade.A;
        }
      });
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const {
  changeName,
  addScheduledSections,
  dropCourse,
  adminPassAllInProgressClasses,
} = slice.actions;
