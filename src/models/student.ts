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

export const DEFAULT_INITAL_STUDENT: Student = {
  id: v4(),
  firstName: "Mike",
  middleName: "The",
  lastName: "Tiger",

  majors: [SoftwareEngineeringDegree],
  minors: [],

  gpa: 4.0,
  completedCourses: [],
};
