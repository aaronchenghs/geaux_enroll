import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryCourse, Course } from "../../models/course";
import { Section } from "../../models/section";
import { getCurrentSections } from "../../pages/SemesterView/section-service";
import { WeeklySchedule } from "../../models/weeklySchedule";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BIOL,
  CSC1350,
  ENGL1001,
  MATH1550,
  TechElectiveA,
} from "../../models/database/SWEDegree";
import { defaultToastOptions } from "../../models/toast";

interface SemesterState {
  coursesToSchedule: Course[];
  selectedProps: {
    course: null | Course;
    sections: Section[]; // For most courses
    parent: CategoryCourse | null;
  };
  hoveredSection: Section | null;
  schedule: WeeklySchedule; // This is what will do the calculations
  scheduledSections: Section[]; // This will store the human readable version
}

// export const dummy_courses = genDummyCourses();
export const dummy_courses = [CSC1350, MATH1550, ENGL1001, BIOL, TechElectiveA];

const INITIAL_STATE: SemesterState = {
  coursesToSchedule: [],
  selectedProps: {
    course: null,
    sections: [],
    parent: null,
  },
  hoveredSection: null,
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
    addCourseToSchedule(state, action: PayloadAction<Course>) {
      toast.success(`${action.payload.name} scheduled.`, defaultToastOptions);
      state.coursesToSchedule = [...state.coursesToSchedule, action.payload];
    },
    clearCoursesToSchedule(state) {
      state.coursesToSchedule = [];
    },
    clearScheduledSections(state) {
      // Create an array of courses from the scheduled sections
      const scheduledCourses = state.scheduledSections.map(
        (section) => section.course,
      );

      // Filter out the courses from coursesToSchedule that are in the scheduledCourses array
      state.coursesToSchedule = state.coursesToSchedule.filter(
        (courseToSchedule) =>
          !scheduledCourses.some((scheduledCourse) =>
            scheduledCourse.equals(courseToSchedule as Course),
          ),
      );

      state.scheduledSections = [];
    },
    // pass course.courseAbreviation + course.code
    removeCourseFromSchedule(state, action: PayloadAction<string>) {
      state.coursesToSchedule = state.coursesToSchedule.filter(
        (course) => course.courseAbreviation + course.code !== action.payload,
      );
    },
    returnFromCurrentSelection(state) {
      if (state.selectedProps.parent == null) {
        // Nothing on stack
        state.selectedProps.course = null;
        state.selectedProps.sections = [];
      } else {
        // CategoryCourse was parent of that course
        const next = state.selectedProps.parent;

        state.selectedProps.course = next;
        state.selectedProps.sections = [];
        state.selectedProps.parent = null;
      }
    },

    hoverSection(state, action: PayloadAction<Section>) {
      state.hoveredSection = action.payload;
    },

    unhoverSection(state, action: PayloadAction<Section | null>) {
      // Defensive Programming
      if (state.hoveredSection == action.payload || action.payload == null) {
        state.hoveredSection = null;
      }
    },

    selectCourse(state, action: PayloadAction<Course>) {
      // Create backtrail to parent CategoryCourse
      if (state.selectedProps.course instanceof CategoryCourse) {
        if (state.selectedProps.parent != null) {
          throw new Error(
            "CategoryCourses supported to depth of one - for now...",
          );
        }

        state.selectedProps.parent = state.selectedProps.course;
      }

      // Update selected course
      state.selectedProps.course = action.payload;

      // If CategoryCourse add option information to state
      if (action.payload instanceof CategoryCourse) {
        // state.selectedCourseProps.options = action.payload.options;
      } else {
        state.selectedProps.sections = getCurrentSections(action.payload);
      }
    },
    addSection(state, action: PayloadAction<Section>) {
      // If dealing with a category course
      if (state.selectedProps.parent) {
        if (state.selectedProps.parent.optionTaken != null) {
          if (state.selectedProps.parent.section == action.payload) return;

          semester_slice.caseReducers.removeSection(
            state,
            removeSection(state.selectedProps.parent.section as Section),
          );
        }
      } else {
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
      }

      // If the new sections schedule would collide throw error
      if (WeeklySchedule.doCollide(state.schedule, action.payload.schedule))
        throw new Error(
          "Attempted to add a section that would collide with exisiting schedule",
        );

      // Update course to reflect newly scheduled section
      action.payload.course.section = action.payload;

      if (state.selectedProps.parent) {
        state.selectedProps.parent.section = action.payload;
      }

      // Add section to list of scheduled sections
      state.scheduledSections.push(action.payload);

      // Update schedule object by adding section schedule
      state.schedule = WeeklySchedule.union(
        state.schedule,
        action.payload.schedule,
      );

      // There must be a <ToastContainer> on the papge to see this
      toast.success(`${action.payload.name} successfully added!`, {
        ...defaultToastOptions,
        toastId: action.payload.name,
      });
    },
    removeSection(state, action: PayloadAction<Section>) {
      const indexToRemove = state.scheduledSections.indexOf(action.payload);

      if (state.selectedProps.parent) {
        if (state.selectedProps.parent.section == action.payload) {
          state.selectedProps.parent.section = null;
        }
      }

      if (indexToRemove == -1)
        throw new Error("Attempted to remove a section that wasnt scheduled");

      // Update active course prop and remove section
      if (state.selectedProps.course?.section != null) {
        state.selectedProps.course!.section = null;
      }

      state.scheduledSections.splice(indexToRemove, 1);
      state.schedule = WeeklySchedule.disunion(
        state.schedule,
        action.payload.schedule,
      );

      // Clear notifs
      toast.dismiss();
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
  addCourseToSchedule,
  removeCourseFromSchedule,
  hoverSection,
  unhoverSection,
  clearScheduledSections,
  clearCoursesToSchedule,
} = semester_slice.actions;
