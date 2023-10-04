import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course, CourseFactory, Department } from "../../models/course";

interface SemesterState {
  coursesToSchedule: Course[];
}

const genDummyCourses = (): Course[] => {
  const output = [];

  for (let i = 0; i < 5; i++) {
    const factory = new CourseFactory();

    factory.name = "Course " + i;
    factory.code = i * 1000;
    factory.department = Department.CS;

    output.push(factory.createCourse());
  }
  return output;
};

export const dummy_courses = genDummyCourses();

const INITIAL_STATE: SemesterState = {
  coursesToSchedule: [],
};

const semester_slice = createSlice({
  name: "semester",
  initialState: INITIAL_STATE,
  reducers: {
    setCoursesToSchedule(state, action: PayloadAction<Course[]>) {
      state.coursesToSchedule = action.payload;
    },
  },
});

export const semester_reducer = semester_slice.reducer;

export const { setCoursesToSchedule } = semester_slice.actions;
