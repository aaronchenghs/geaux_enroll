import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CategoryCourse,
  Course,
  CourseFactory,
  Department,
} from "../../models/course";
import { Section } from "../../models/section";
import { getCurrentSections } from "../../pages/SemesterView/section-service";
import { WeeklySchedule } from "../../models/weeklySchedule";

interface SemesterState {
  coursesToSchedule: Course[];
  selectedCourseProps: {
    course: null | Course;
    sections: Section[]; // For most courses
    parent: CategoryCourse | null;
  };
  schedule: WeeklySchedule; // This is what will do the calculations
  scheduledSections: Section[]; // This will store the human readable version
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

  const factory = new CourseFactory();
  factory.name = "Category Course";
  factory.code = 1111;
  factory.department = Department.BIOL;

  const options = [];

  for (let i = 0; i < 5; i++) {
    const factory = new CourseFactory();

    factory.name = "Course " + i;
    factory.code = i * 1000;
    factory.department = Department.BIOL;

    options.push(factory.createCourse());
  }

  factory.setOptions(options, null);

  output.push(factory.createCourse());

  return output;
};

export const dummy_courses = genDummyCourses();

const INITIAL_STATE: SemesterState = {
  coursesToSchedule: [],
  selectedCourseProps: {
    course: null,
    sections: [],
    parent: null,
  },
  schedule: new WeeklySchedule(),
  scheduledSections: [],
};

const semester_slice = createSlice({
  name: "semester",
  initialState: INITIAL_STATE,
  reducers: {
    setCoursesToSchedule(state, action: PayloadAction<Course[]>) {
      state.coursesToSchedule = action.payload;
    },
    returnFromCurrentSelection(state) {
      if (state.selectedCourseProps.parent == null) {
        // Nothing on stack
        state.selectedCourseProps.course = null;
        state.selectedCourseProps.sections = [];
      } else {
        // CategoryCourse was parent of that course
        const next = state.selectedCourseProps.parent;

        state.selectedCourseProps.course = next;
        state.selectedCourseProps.sections = [];
        state.selectedCourseProps.parent = null;
      }
    },
    selectCourse(state, action: PayloadAction<Course>) {
      // Create backtrail to parent CategoryCourse
      console.log(
        state.selectedCourseProps.course instanceof CategoryCourse,
        "Instance of CatagoryCourse?",
      );
      if (state.selectedCourseProps.course instanceof CategoryCourse) {
        if (state.selectedCourseProps.parent != null) {
          throw new Error(
            "CategoryCourses supported to depth of one - for now...",
          );
        }

        state.selectedCourseProps.parent = state.selectedCourseProps.course;
      }

      // Update selected course
      state.selectedCourseProps.course = action.payload;

      // If CategoryCourse add option information to state
      if (action.payload instanceof CategoryCourse) {
        // state.selectedCourseProps.options = action.payload.options;
      } else {
        state.selectedCourseProps.sections = getCurrentSections(action.payload);
      }
    },
    addSection(state, action: PayloadAction<Section>) {
      // If a section for the course is already scheduled
      if (action.payload.course.section != null) {
        // Exit early if attempting to add a section that is already added
        if (action.payload.course.section == action.payload) {
          return;
        }
        // Otherwise, remove the old section from the currently scheduled state
        semester_slice.caseReducers.removeSection(
          state,
          removeSection(action.payload.course.section),
        );
      }

      // If the new sections schedule would collide throw error
      if (WeeklySchedule.doCollide(state.schedule, action.payload.schedule))
        throw new Error(
          "Attempted to add a section that would collide with exisiting schedule",
        );

      // Update course to reflect newly scheduled section
      action.payload.course.section = action.payload;

      if (state.selectedCourseProps.parent) {
        state.selectedCourseProps.parent.section = action.payload;
      }

      // Add section to list of scheduled sections
      state.scheduledSections.push(action.payload);
      // Update schedule object by adding section schedule
      state.schedule = WeeklySchedule.union(
        state.schedule,
        action.payload.schedule,
      );
    },
    removeSection(state, action: PayloadAction<Section>) {
      const indexToRemove = state.scheduledSections.indexOf(action.payload);

      if (indexToRemove == -1)
        throw new Error("Attempted to remove a section that wasnt scheduled");

      // Update active course prop and remove section
      if (state.selectedCourseProps.course?.section != null) {
        state.selectedCourseProps.course!.section = null;
      }

      state.scheduledSections.splice(indexToRemove, 1);
      state.schedule = WeeklySchedule.disunion(
        state.schedule,
        action.payload.schedule,
      );
    },
  },
});

export const semester_reducer = semester_slice.reducer;

export const {
  setCoursesToSchedule,
  selectCourse,
  returnFromCurrentSelection,
  addSection,
  removeSection,
} = semester_slice.actions;
