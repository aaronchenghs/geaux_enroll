import { Course, Department } from "../course";

export const CHEM1202 = new Course({
    name: "CHEM 1202 General Chemistry II",
    code: 1202,
    department: Department.CSC,
    description: `Additional theory with emphasis on solution chemistry and a quantitative approach; descriptive chemistry of selected elements and compounds from the main groups and the first transition series.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
  });

  export const PHYS2002 = new Course({
    name: "PHYS 2002 General Physics II",
    code: 2002,
    department: Department.CSC,
    description: `Mechanics, heat, sound, light, electricity and magnetism; topics in modern physics.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
  });

  export const PHYS1202 = new Course({
    name: "PHYS 1202 General Physics for Physics Majors",
    code: 1202,
    department: Department.CSC,
    description: `Fundamentals of classical physics and some concepts of modern physics; calculus and vector analysis introduced and used in development of subject matter.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 4,
  });

  export const PhysicalScienceSequence2: Course[] = [
    CHEM1202,
    PHYS2002,
    PHYS1202
  ];