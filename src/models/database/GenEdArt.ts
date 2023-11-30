import { Course, Department } from "../course";

// Architecture

export const ARCH2401 = new Course ({
  name: "Appreciation of Architecture", 
  code: 2401,
  department: Department.ARCH,
  description: ``,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// export const ARCH3005 = new Course({
//   name: "History of Architecture I",
//   code: 3005,
//   department: Department.ARCH,
//   description: ``,
//   prereqs: null,
//   grade: null,
//   section: null,
//   credits: 3,
// });

// export const ARCH3006 = new Course({
//   name: "History of Architecture II",
//   code: 3006,
//   department: Department.ARCH,
//   description: ``,
//   prereqs: null,
//   grade: null,
//   section: null,
//   credits: 3,
// });

// Arts

export const ART1001 = new Course({
  name: "Introduction to Fine Arts",
  code: 1001,
  department: Department.ART,
  description: `This introductory course offers a broad overview of the fine arts, including various forms, mediums, and historical contexts. It is designed to cultivate an appreciation and basic understanding of artistic expression.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ART1011 = new Course({
  name: "Art Structure",
  code: 1011,
  department: Department.ART,
  description: `Focuses on the fundamental structures and elements of art, including form, line, color, and composition. This course is suitable for students seeking a foundational understanding of art design principles.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ART1440 = new Course({
  name: "Historical Survey of the Arts",
  code: 1440,
  department: Department.ART,
  description: `This course provides a comprehensive survey of artistic movements and developments across different cultures and historical periods.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ART1441 = new Course({
  name: "Historical Survey of the Arts",
  code: 1441,
  department: Department.ART,
  description: `A continuation of ART1440, this course further explores significant art movements, focusing on more recent historical developments and contemporary art.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ART2401 = new Course({
  name: "Art of the Ancient Near East and Egypt",
  code: 2401,
  department: Department.ART,
  description: `Explores the rich artistic heritage of the Ancient Near East and Egypt, delving into their unique artistic styles, cultural significance, and historical impact.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ART2411 = new Course({
  name: "Survey of Asian Art",
  code: 2411,
  department: Department.ART,
  description: `This course provides an overview of Asian art, covering a variety of regions and periods, highlighting the diversity and cultural significance of Asian artistic traditions.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ART2470 = new Course({
  name: "Survey of 20th Century Art",
  code: 2470,
  department: Department.ART,
  description: `Focuses on the exploration of various art movements and key figures in the 20th century, examining how they shaped modern artistic expression and thought.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// Honors

export const HNRS2021 = new Course({
  name: "Colloquium in the Arts",
  code: 2021,
  department: Department.HNRS,
  description: `An interactive seminar that focuses on various art forms, their cultural significance, and contemporary trends. The course encourages critical discussion and analysis.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// Interior Design

export const ID1051 = new Course({
  name: "Introduction to Interior Design",
  code: 1051,
  department: Department.ID,
  description: `This course provides a foundational understanding of interior design principles, practices, and aesthetic considerations.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// export const ID3741 = new Course({
//   name: "History of Interior Design and Decoration I",
//   code: 3741,
//   department: Department.ID,
//   description: `Explores the evolution of interior design and decoration, focusing on major styles, movements, and designers from historical perspectives.`,
//   prereqs: null,
//   grade: null,
//   section: null,
//   credits: 3,
// });

// export const ID3742 = new Course({
//   name: "History of Interior Design and Decoration II",
//   code: 3742,
//   department: Department.ID,
//   description: `A continuation of ID3741, this course further examines the historical development of interior design, with a focus on modern and contemporary trends.`,
//   prereqs: null,
//   grade: null,
//   section: null,
//   credits: 3,
// });

// Landscape Architecture 

export const LA1201 = new Course({
  name: "Introduction to Landscape Architecture",
  code: 1201,
  department: Department.LA,
  description: `Introduction to the profession of landscape architecture for non-majors; overview of professional concerns and responsibilities; awareness of natural and planned landscapes, as well as, the importance of using land in an efficient and attractive manner.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// Music

export const MUS1751 = new Course({
  name: "Music Appreciation",
  code: 1751,
  department: Department.MUS,
  description: `This course introduces students to a wide range of musical genres, fostering an appreciation for diverse musical traditions and forms.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const MUS1799 = new Course({
  name: "Rudiments of Music",
  code: 1799,
  department: Department.MUS,
  description: `Focuses on the basics of music theory, including notation, rhythm, harmony, and melody, suitable for beginners.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const MUS2000 = new Course({
  name: "History of Jazz",
  code: 2000,
  department: Department.MUS,
  description: `Explores the origins, development, and impact of jazz music, covering key artists and significant movements within the genre.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const MUS2053 = new Course({
  name: "Survey of Music History I",
  code: 2053,
  department: Department.MUS,
  description: `A comprehensive exploration of the development of Western music from ancient times through the Baroque era.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const MUS2054 = new Course({
  name: "Survey of Music History II",
  code: 2054,
  department: Department.MUS,
  description: `Continues from MUS2053, covering the evolution of music from the Classical period to contemporary times.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// Philosophy

export const PHI2023 = new Course({
  name: "Philosophy of Art",
  code: 2023,
  department: Department.PHI,
  description: `This course delves into philosophical concepts and theories related to art, exploring aesthetics, meaning, and the nature of artistic expression.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// Theatre 

export const THTR1020 = new Course({
  name: "Introduction to Theatre",
  code: 1020,
  department: Department.THTR,
  description: `Provides an overview of theatre history, genres, and production elements, offering foundational knowledge for theatre enthusiasts and practitioners.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const THTR2028 = new Course({
  name: "Introduction to Dramatic Literature",
  code: 2028,
  department: Department.THTR,
  description: `Explores major works and figures in dramatic literature, analyzing themes, structures, and historical contexts.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const GenEdArts: Course[] = [
  ARCH2401,
  ART1001,
  ART1011,
  ART1440,
  ART1441,
  ART2401,
  ART2411,
  ART2470,
  HNRS2021,
  ID1051,
  LA1201,
  MUS1751,
  MUS1799,
  MUS2000,
  MUS2053,
  MUS2054,
  THTR1020,
  THTR2028,
  PHI2023,
];
