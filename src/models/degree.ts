import { CategoryCourse, Course, Department } from "./course";

export interface Degree {
  id: string;
  department: string;
  abbreviation: string;
  concentration: string;
  requirements: Course[];
  hours: number;

  rootCourses: Course[];
  CorHigherCourses: Course[];
}

export const SoftwareEngineeringDegree: Degree = {
  id: "01010011 01010111 01000101 ",
  department: "Computer Science",
  abbreviation: "SWE",
  concentration: "Software Engineering",
  requirements: [],
  hours: 0,
  rootCourses: [],
  CorHigherCourses: [],
};

// export const SWERequirements: Course[] = [
//   new Course({
//     name: "Intro CS1 For Majors",
//     code: 1350,
//     department: Department.CS,
//     description: `This course offers an introduction to computer science principles,
//      algorithmic thinking, and foundational coding skills tailored for students
//      pursuing a major in the field. Topics covered include variables, control structures,
//      basic data structures, and simple algorithms. It lays the groundwork for more
//      advanced courses in the computer science curriculum.`,
//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Calculus 1",
//     code: 1550,
//     department: Department.MATH,
//     description: `Calculus 1 provides a deep dive into the
//      fundamental concepts of differential calculus. Students
//      will explore limits, continuity, derivatives, and their applications.
//      Emphasis is on understanding the concepts graphically,
//      numerically, and analytically. Real-world applications are
//      highlighted to demonstrate the relevance of calculus in various fields.`,
//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Comp 1",
//     code: 1001,
//     department: Department.ENGL,
//     description: `An introductory course in composition, Comp 1
//      aims to enhance students' writing skills, emphasizing clarity,
//      organization, and argumentation. Through a series of essays and written exercises,
//      students will learn to construct coherent arguments, conduct research, and
//      effectively communicate their ideas.`,
//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Sequence 1 Requirement",
//     code: 1001,
//     department: Department.BIOL,
//     description: `This is an introductory course to the vast field of biology,
//       covering the essential concepts from cell biology to ecology.
//       Students will gain an understanding of the building blocks of life,
//       genetic information flow, and the interaction of organisms with their
//        environment. Lab sessions provide hands-on experiences to reinforce theoretical knowledge.`,
//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Intro CS II for majors",
//     code: 1351,
//     department: Department.CS,
//     description: "",
//     prereqs: [1350],
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Adv Data Str",
//     code: 3102,
//     department: Department.CS,
//     description: "",
//     prereqs: [1351],
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Discrete Structures",
//     code: 2259,
//     department: Department.CS,
//     description: "",
//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "OO Design",
//     code: 3380,
//     department: Department.CS,
//     description: "",

//     prereqs: [3102], // Prerequisite is Adv Data Str
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Software Sys",
//     code: 4330,
//     department: Department.CS,
//     description: "",

//     prereqs: [3380], // Prerequisite is OO Design
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Op Sys",
//     code: 4103,
//     department: Department.CS,
//     description: "",

//     prereqs: [3380], // Prerequisite is OO Design
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "DB Mgt Sys",
//     code: 4402,
//     department: Department.CS,
//     description: "",

//     prereqs: [4330], // Prerequisite is Software Sys
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Cmplr Constr",
//     code: 4351,
//     department: Department.CS,
//     description: "",

//     prereqs: [4103], // Prerequisite is Op Sys
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Prog Lang",
//     code: 4101,
//     department: Department.CS,
//     description: "",

//     prereqs: [3501], // Prerequisite is Comp Org & Design
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Num Methds",
//     code: 2262,
//     department: Department.CS,
//     description: "",

//     prereqs: [2090], // Prerequisite is DE & Lin Alg
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Statistics",
//     code: 3302,
//     department: Department.IE,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Ethics in Computing",
//     code: 3200,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Tech Elective A",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Tech Elective A or B",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 2+++ (SEG)",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 3+++",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 4+++ (SEG)",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Area Elective (SEG)",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Approved Elective",
//     code: null,
//     department: null,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Gen Ed Socl Science",
//     code: null,
//     department: Department.SOCSCI,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Gen Ed Socl Science 2+++",
//     code: null,
//     department: Department.SOCSCI,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Gen Ed Art",
//     code: null,
//     department: Department.ART,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "DB Mgt Sys (SEG)",
//     code: 4402,
//     department: Department.CS,
//     description: "",

//     prereqs: null, // Prerequisites can be updated if available
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Op Sys",
//     code: 4103,
//     department: Department.CS,
//     description: "",

//     prereqs: null, // Prerequisites can be updated if available
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Cmplr Constr (SEG)",
//     code: 4351,
//     department: Department.CS,
//     description: "",

//     prereqs: null, // Prerequisites can be updated if available
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Gen Ed Hum CMST",
//     code: null,
//     department: Department.CMST, // Assuming CMST is a department
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Physical Sci Requirement",
//     code: null,
//     department: Department.PHYS, // Assuming Physical Science relates to Physics
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Science Sequence II Requirement",
//     code: null,
//     department: null, // Specific science department not mentioned
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Science Seq I or II Lab",
//     code: null,
//     department: null, // Specific science department not mentioned
//     description: "",

//     prereqs: null,
//     courseType: ["Lab"],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Tech Elective A",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Tech Elective A or B",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "IE 3302 Statistics",
//     code: 3302,
//     department: Department.IE, // Assuming IE is a department
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 2262 Num Methds",
//     code: 2262,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 3501 Comp Org & Design",
//     code: 3501,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 4101 Prog Lang",
//     code: 4101,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 3380 OO Design",
//     code: 3380,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 3200 Ethics in Computing",
//     code: 3200,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Approved Elective",
//     code: null,
//     department: null, // Specific department not mentioned
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Approved Elective",
//     code: null,
//     department: null, // Specific department not mentioned
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Gen Ed Socl Science",
//     code: null,
//     department: Department.SOCSCI, // Assuming SOCSCI is a department
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Gen Ed Socl Science 2+++",
//     code: null,
//     department: Department.SOCSCI, // Assuming SOCSCI is a department
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "Gen Ed Art",
//     code: null,
//     department: Department.ART, // Assuming ART is a department
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 4330 Software Sys",
//     code: 4330,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 4103 Op Sys",
//     code: 4103,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 4402 DB Mgt Sys (SEG)",
//     code: 4402,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 3+++ (SEG)",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new Course({
//     name: "CSC 4351 Cmplr Constr (SEG)",
//     code: 4351,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new CategoryCourse({
//     name: "Area Elective (SEG)",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new CategoryCourse({
//     name: "CSC 2+++ (SEG)",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new CategoryCourse({
//     name: "CSC 4+++",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new CategoryCourse({
//     name: "CSC 2+++ (SEG)",
//     code: null,
//     department: Department.CS,
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new CategoryCourse({
//     name: "Tech Elective A",
//     code: null,
//     department: null, // Specific department not mentioned
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new CategoryCourse({
//     name: "Tech Elective A or B",
//     code: null,
//     department: null, // Specific department not mentioned
//     description: "",

//     prereqs: null,
//     courseType: [,],
//     grade: null,
//     section: null,
//   }),
//   new CategoryCourse({
//     name: "Approved Elective",
//     code: null,
//     department: null, // Specific department not mentioned
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new CategoryCourse({
//     name: "Gen Ed Socl Science",
//     code: null,
//     department: null, // Department such as Humanities, Social Sciences, etc.
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new CategoryCourse({
//     name: "Gen Ed Socl Science 2+++",
//     code: null,
//     department: null, // Department such as Humanities, Social Sciences, etc.
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
//   new CategoryCourse({
//     name: "Gen Ed Art",
//     code: null,
//     department: null, // Specific department not mentioned
//     description: "",

//     prereqs: null,
//     courseType: [],
//     grade: null,
//     section: null,
//   }),
// ];
