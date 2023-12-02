import { Course, Department } from "../course";

export const PHYS1201 = new Course({
    name: "General Physics for Physics Majors",
    code: 1201,
    department: Department.CSC,
    description: `Fundamentals of classical physics and some concepts of modern physics; calculus and vector analysis introduced and used in development of subject matter.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 4,
  });

  export const PHYS2001 = new Course({
    name: "PHYS 2001 General Physics I",
    code: 2001,
    department: Department.CSC,
    description: `Mechanics, heat, sound, light, electricity and magnetism; topics in modern physics.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
  });

  export const CHEM1201 = new Course({
    name: "CHEM 1201 General Chemistry I ",
    code: 1201,
    department: Department.CSC,
    description: `Modern chemical theories and principles; quantitative approach and problem solving; descriptive chemistry of selected elements and compounds.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
  });

  export const PhysicalScienceSequence1: Course[] = [
    PHYS1201,
    PHYS2001,
    CHEM1201
  ];
