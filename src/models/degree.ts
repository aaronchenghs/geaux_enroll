import { Course } from "./course";

export interface Degree {
  id: string;
  department: string;
  abbreviation: string;
  concentration: string;
  requirements: Course[];
  hours: number;
  year: string;

  rootCourses: Course[];
}
