import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course, CourseFactory, Department } from "../../models/course";
import { Section } from "../../models/section";
import { getCurrentSections } from "../../pages/SemesterView/section-service";

interface SemesterState {
  coursesToSchedule: Course[];
  selectedCourseProps: { course: null | Course; sections: Section[] };
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
  selectedCourseProps: { course: null, sections: [] },
};

const semester_slice = createSlice({
  name: "semester",
  initialState: INITIAL_STATE,
  reducers: {
    setCoursesToSchedule(state, action: PayloadAction<Course[]>) {
      state.coursesToSchedule = action.payload;
    },
    selectCourse(state, action: PayloadAction<Course | null>) {
      state.selectedCourseProps.course = action.payload;
      if (action.payload != null) {
        state.selectedCourseProps.sections = getCurrentSections(action.payload);
      } else {
        state.selectedCourseProps.sections = [];
      }
    },
  },
});

export const semester_reducer = semester_slice.reducer;

export const { setCoursesToSchedule, selectCourse } = semester_slice.actions;
