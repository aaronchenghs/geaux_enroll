import { v4 } from "uuid";
import { Department } from "./course";
import { Degree } from "./degree";
import { SoftwareEngineeringDegree } from "./database/SWEDegree";
import { Section } from "./section";

export interface Student {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;

  majors: Degree[];
  minors: Department[];

  hoursCanSchedule: number;
  gpa: number;
  scheduledCourses: Section[];
}

export const DEFAULT_INITIAL_STUDENT: Student = {
  id: v4(),
  firstName: "Mike",
  middleName: "The",
  lastName: "Tiger",

  majors: [SoftwareEngineeringDegree],
  minors: [],

  hoursCanSchedule: 18,
  gpa: 4.0,
  scheduledCourses: [],
};
