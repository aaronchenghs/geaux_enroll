import { Course, Department } from "../course";

export const CMST2040 = new Course ({
  name: "Introduction to Performing Literature",
  code: 2040,
  department: Department.CMST,
  description: ` This course examines literature through the lens of performance. It includes the reading, analysis, and enactment of various literary forms such as prose, poetry, and drama. Students will explore different techniques for interpreting and performing literary works, understanding how performance can influence the reception and interpretation of texts. The course aims to enhance analytical skills, improve understanding of literary genres, and develop performance abilities.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const CMST2060 = new Course ({
  name: "Public Speaking",
  code: 2060,
  department: Department.CMST,
  description: `It involves analyzing the techniques of various speakers and provides practical opportunities for students to develop and refine their own speaking abilities. The course aims to enhance students' understanding of communication strategies, improve their public speaking skills, and foster critical listening and analysis skills.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const GenEdCMST: Course[] = [
  CMST2040,
  CMST2060    
];