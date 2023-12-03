import { Course, Department } from "../course";

export const PHYS1209 = new Course({
  name: "General Physics Laboratory for Physics Majors",
  code: 1209,
  department: Department.PHYS,
  description: `Laboratory to accompany PHYS 1202.`,
  prereqs: [],
  grade: null,
  section: null,
  credits: 1,
});

export const PHYS2109 = new Course({
  name: "General Physics Laboratory",
  code: 2109,
  department: Department.PHYS,
  description: `Electricity, magnetism, geometrical and physical optics and other topics in modern physics.`,
  prereqs: [],
  grade: null,
  section: null,
  credits: 1,
});

export const CHEM1213 = new Course({
  name: "General Chemistry Laboratory",
  code: 1213,
  department: Department.CHEM,
  description: `Basic laboratory operations including selected experiments and introductory inorganic qualitative analysis.`,
  prereqs: [],
  grade: null,
  section: null,
  credits: 1,
});

export const PhysicalScienceSequence2LabOptions = [
  PHYS1209,
  PHYS2109,
  CHEM1213,
];
