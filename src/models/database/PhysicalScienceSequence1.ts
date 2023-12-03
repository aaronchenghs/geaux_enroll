import { Course, Department } from "../course";

export const PHYS1201 = new Course({
  name: "General Physics for Physics Majors",
  code: 1201,
  department: Department.PHYS,
  description: `Fundamentals of classical physics and some concepts of modern physics; calculus and vector analysis introduced and used in development of subject matter.`,
  prereqs: [],
  grade: null,
  section: null,
  credits: 4,
});

export const PHYS2001 = new Course({
  name: "General Physics I",
  code: 2001,
  department: Department.PHYS,
  description: `Mechanics, heat, sound, light, electricity and magnetism; topics in modern physics.`,
  prereqs: [],
  grade: null,
  section: null,
  credits: 3,
});

export const CHEM1201 = new Course({
  name: "General Chemistry I ",
  code: 1201,
  department: Department.CHEM,
  description: `Modern chemical theories and principles; quantitative approach and problem solving; descriptive chemistry of selected elements and compounds.`,
  prereqs: [],
  grade: null,
  section: null,
  credits: 3,
});

export const PhysicalScienceSequence1Options: Course[] = [
  PHYS1201,
  PHYS2001,
  CHEM1201,
];
