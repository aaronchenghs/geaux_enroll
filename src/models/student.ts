import { v4 } from "uuid";
import { Course, Department } from "./course";
import { Degree } from "./degree";
import { SoftwareEngineeringDegree } from "./database/SWEDegree";

export interface Student {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;

  majors: Degree[];
  minors: Department[];

  gpa: number;
  completedCourses: Course[];
}

export const AaronCheng_INITIAL: Student = {
  id: v4(),
  firstName: "Aaron",
  middleName: "Raphael",
  lastName: "Cheng",

  majors: [SoftwareEngineeringDegree],
  minors: [],

  gpa: 4.0,
  completedCourses: [],
};
