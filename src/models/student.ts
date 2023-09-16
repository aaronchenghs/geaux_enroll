import { CompletedCourse, Departments } from "./course";

export interface Student {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;

  majors: Major[];
  minors: Departments[];

  gpa: number;
  completedCourses: CompletedCourse[];
}

export interface Major {
  department: Departments;
  concentration?: string;
}
