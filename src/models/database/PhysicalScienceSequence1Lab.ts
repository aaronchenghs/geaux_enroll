import { Course, Department } from "../course";

export const CHEM1212 = new Course({
  name: "Introductory General Chemistry Laboratory",
  code: 1212,
  department: Department.CHEM,
  description: `Basic laboratory operations including selected experiments and introductory inorganic qualitative analysis.`,
  prereqs: [],
  grade: null,
  section: null,
  credits: 1,
});

export const PHYS1208 = new Course({
  name: "General Physics Laboratory for Physics Majors",
  code: 1208,
  department: Department.PHYS,
  description: `Laboratory to accompany PHYS 1201.`,
  prereqs: [],
  grade: null,
  section: null,
  credits: 1,
});

export const PHYS2108 = new Course({
  name: "Introductory Physics Laboratory",
  code: 2108,
  department: Department.PHYS,
  description: ` Laboratory to accompany PHYS 2001 or PHYS 2110.`,
  prereqs: [],
  grade: null,
  section: null,
  credits: 1,
});

export const PhysicalScienceSequence1LabOptions = [
  PHYS1208,
  PHYS2108,
  CHEM1212,
];
