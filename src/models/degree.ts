import {
  CategoryCourse,
  CoreCourse,
  Course,
  CourseType,
  Department,
} from "./course";

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

export const CSC1350 = new CoreCourse({
  name: "Intro CS1 For Majors",
  code: 1350,
  department: Department.CS,
  description: `This course offers an introduction to computer science principles,
     algorithmic thinking, and foundational coding skills tailored for students
     pursuing a major in the field. Topics covered include variables, control structures,
     basic data structures, and simple algorithms. It lays the groundwork for more
     advanced courses in the computer science curriculum.`,
  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
});
export const MATH1550 = new CoreCourse({
  name: "Calculus 1",
  code: 1550,
  department: Department.MATH,
  description: `Calculus 1 provides a deep dive into the
     fundamental concepts of differential calculus. Students
     will explore limits, continuity, derivatives, and their applications.
     Emphasis is on understanding the concepts graphically,
     numerically, and analytically. Real-world applications are
     highlighted to demonstrate the relevance of calculus in various fields.`,
  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
});
export const MATH1552 = new CoreCourse({
  name: "Calculus 2",
  code: 1550,
  department: Department.MATH,
  description: ``,
  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
});
export const ENGL1001 = new CoreCourse({
  name: "Comp 1",
  code: 1001,
  department: Department.ENGL,
  description: `An introductory course in composition, Comp 1
     aims to enhance students' writing skills, emphasizing clarity,
     organization, and argumentation. Through a series of essays and written exercises,
     students will learn to construct coherent arguments, conduct research, and
     effectively communicate their ideas.`,
  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
});
export const BIOL = new CoreCourse({
  name: "Sequence 1 Requirement",
  code: 1001,
  department: Department.BIOL,
  description: `This is an introductory course to the vast field of biology,
      covering the essential concepts from cell biology to ecology.
      Students will gain an understanding of the building blocks of life,
      genetic information flow, and the interaction of organisms with their
       environment. Lab sessions provide hands-on experiences to reinforce theoretical knowledge.`,
  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
});
export const CSC1351 = new CoreCourse({
  name: "Intro CS II for majors",
  code: 1351,
  department: Department.CS,
  description: `This course is a continuation of Intro to Computer Science I, 
    delving deeper into foundational concepts of computer science. Students 
    will explore more advanced programming techniques, data structures, and algorithms. 
    Topics may include object-oriented programming, recursion, searching and sorting
     algorithms, and an introduction to data structures such as linked lists and trees.`,
  prereqs: [CSC1350, MATH1550],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC2259 = new CoreCourse({
  name: "Discrete Structures",
  code: 2259,
  department: Department.CS,
  description: `Discrete Structures introduces students to the foundational mathematical
   concepts used in computer science. Topics covered include set theory, logic, relations,
    functions, combinatorics, graph theory, and formal languages. This course emphasizes the
     application of these concepts to computer science problems and algorithms.`,
  prereqs: [MATH1552, CSC1351],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC3102 = new CoreCourse({
  name: "Advanced Data Structures",
  code: 3102,
  department: Department.CS,
  description: `Advanced Data Structures delves into the intricacies of various data structures
   and their applications. Students will learn about and implement advanced data structures such 
   as balanced trees, graphs, heaps, and hash tables. The course will also cover associated algorithms 
   and their time complexities, ensuring students understand the trade-offs involved in choosing one 
   structure over another for specific problems.`,
  prereqs: [CSC1351, CSC2259],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC3380 = new CoreCourse({
  name: "Object-Oriented Design",
  code: 3380,
  department: Department.CS,
  description: `Object-Oriented Design focuses on the principles and practices of object-oriented programming (OOP)
   and design. Students will learn about classes, inheritance, polymorphism, encapsulation, and design patterns. 
   The course emphasizes the importance of creating modular and maintainable code, 
   and students will work on projects that require them to design and implement software using OOP principles.`,
  prereqs: [CSC3102],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC4330 = new CoreCourse({
  name: "Software Systems",
  code: 4330,
  department: Department.CS,
  description: "",

  prereqs: [CSC3380, CSC3102],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC4103 = new CoreCourse({
  name: "Operating Systems",
  code: 4103,
  department: Department.CS,
  description: "",

  prereqs: [CSC3380], // Prerequisite is OO Design
  courseType: [],
  grade: null,
  section: null,
});
export const CSC4402 = new Course({
  name: "Database Management Systems",
  code: 4402,
  department: Department.CS,
  description: "",

  prereqs: [CSC4330], // Prerequisite is Software Sys
  courseType: [],
  grade: null,
  section: null,
});
export const CSC4351 = new CoreCourse({
  name: "Compiler Construction",
  code: 4351,
  department: Department.CS,
  description: "",

  prereqs: [CSC4103], // Prerequisite is Op Sys
  courseType: [],
  grade: null,
  section: null,
});
export const CSC3501 = new Course({
  name: "Computer Organization & Design",
  code: 3501,
  department: Department.CS,
  description: "",

  prereqs: [CSC2259],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC4101 = new CoreCourse({
  name: "Programming Languages",
  code: 4101,
  department: Department.CS,
  description: "",

  prereqs: [CSC3501], // Prerequisite is Comp Org & Design
  courseType: [],
  grade: null,
  section: null,
});
export const MATH2090 = new Course({
  name: "Differential Equations & Linear Algebra",
  code: 2090,
  department: Department.MATH,
  description: "",

  prereqs: [MATH1552],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC2262 = new Course({
  name: "Numerical Methods",
  code: 2262,
  department: Department.CS,
  description: "",

  prereqs: [MATH1552, CSC1351],
  courseType: [],
  grade: null,
  section: null,
});
export const IE3302 = new Course({
  name: "Statistics",
  code: 3302,
  department: Department.IE,
  description: "",

  prereqs: [CSC2262, MATH1552],
  courseType: [],
  grade: null,
  section: null,
});
export const ENGL2000 = new CoreCourse({
  name: "English 2000",
  code: 2000,
  department: Department.ENGL,
  description: "",

  prereqs: [],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC3200 = new CoreCourse({
  name: "Ethics in Computing",
  code: 3200,
  department: Department.CS,
  description: "",

  prereqs: [ENGL2000, CSC3102],
  courseType: [],
  grade: null,
  section: null,
});
export const TechElectiveA = new CategoryCourse({
  name: "Tech Elective A",

  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const TechElectiveAorB = new CategoryCourse({
  name: "Tech Elective A or B",

  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const CSC2000Elective = new CategoryCourse({
  name: "CSC 2+++",

  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const CSC2000ElectiveSeg = new CategoryCourse({
  name: "CSC 2+++ (Seg)",

  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const CSC3000Elective = new CategoryCourse({
  name: "CSC 3+++",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const CSC4000Elective = new CategoryCourse({
  name: "CSC 4+++",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const AreaElective1 = new CategoryCourse({
  name: "Area Elective 1",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const AreaElective2 = new CategoryCourse({
  name: "Area Elective 2",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const ApprovedElective1 = new CategoryCourse({
  name: "Approved Elective 1",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const ApprovedElective2 = new CategoryCourse({
  name: "Approved Elective 2",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdSocialScience = new CategoryCourse({
  name: "General Education: Social Science",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdSocialScience2000 = new CategoryCourse({
  name: "General Education: Social Science 2+++",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdArt = new CategoryCourse({
  name: "General Education: Art",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdHumEnglOrHnrs = new CategoryCourse({
  name: "General Education: Humanities, ENGL, or 2000+",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdHum = new CategoryCourse({
  name: "General Education: Humanities",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdHumCMST = new CategoryCourse({
  name: "General Education: Humanities CMST",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const PhysicalScienceSequence1 = new CategoryCourse({
  name: "Physical Sci Requirement",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const PhysicalScienceSequence2 = new CategoryCourse({
  name: "Science Sequence II Requirement",
  description: "",

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const PhysicalScienceSequence1Lab = new CategoryCourse({
  name: "Science Seq I Lab",
  description: "",

  prereqs: null,
  courseType: [CourseType.LAB],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const PhysicalScienceSequence2Lab = new CategoryCourse({
  name: "Science Seq II Lab",
  description: "",

  prereqs: [PhysicalScienceSequence1Lab],
  courseType: [CourseType.LAB],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});

export const SWEDegreeRequirements: Course[] = [
  CSC1350,
  MATH1550,
  MATH1552,
  ENGL1001,
  BIOL,
  CSC1351,
  CSC3102,
  CSC2259,
  CSC3380,
  CSC4330,
  CSC4103,
  CSC4402,
  CSC4351,
  CSC3501,
  CSC4101,
  MATH2090,
  CSC2262,
  IE3302,
  ENGL2000,
  CSC3200,
  TechElectiveA,
  TechElectiveAorB,
  CSC2000Elective,
  CSC2000ElectiveSeg,
  CSC3000Elective,
  CSC4000Elective,
  AreaElective1,
  AreaElective2,
  ApprovedElective1,
  ApprovedElective2,
  GenEdSocialScience,
  GenEdSocialScience2000,
  GenEdArt,
  GenEdHum,
  GenEdHumCMST,
  GenEdHumEnglOrHnrs,
  PhysicalScienceSequence1,
  PhysicalScienceSequence2,
  PhysicalScienceSequence1Lab,
  PhysicalScienceSequence2Lab,
];

export const SoftwareEngineeringDegree: Degree = {
  id: "01010011 01010111 01000101 ",
  department: "Computer Science",
  abbreviation: "SWE",
  concentration: "Software Engineering",
  year: "2019-2020",
  requirements: SWEDegreeRequirements,
  hours: 120,
  rootCourses: [],
};
