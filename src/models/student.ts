import { Course, Department } from "./course";

export interface Student {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;

  majors: Major[];
  minors: Department[];

  gpa: number;
  completedCourses: Course[];
}

export interface Major {
  department: Department;
  concentration?: string;
}
