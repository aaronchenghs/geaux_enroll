import { Course, Department } from "../course";

// African American Studies
  
export const AAAS2000 = new Course({
    name: "Introduction to African & African American Studies",
    code: 2003,
    department: Department.AAAS,
    description: `Dimensions of African & African American thought and practice in contemporary and historical perspective.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 4,
  });
  
// Arabic

export const ARAB1101 = new Course({
  name: "Beginning Arabic",
  code: 1101,
  department: Department.ARAB,
  description: `A Supplementary work in language laboratory. Introduction to alphabet, vocabulary and grammar; elementary language study with oral, written and reading practice.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 4,
});

export const ARAB1102 = new Course({
    name: "Beginning Arabic",
    code: 1102,
    department: Department.ARAB,
    description: `An introductory course in Arabic, focusing on fundamental language skills and basic cultural insights.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 4,
  });
  
  export const ARAB2101 = new Course({
    name: "Intermediate Arabic",
    code: 2101,
    department: Department.ARAB,
    description: `Continues language development from the beginning level, introducing more complex grammatical structures and vocabulary.`,
    prereqs: [ARAB1102],
    grade: null,
    section: null,
    credits: 4,
  });
  
  export const ARAB2102 = new Course({
    name: "Intermediate Arabic",
    code: 2102,
    department: Department.ARAB,
    description: `Further develops intermediate Arabic language skills, emphasizing communication, reading, and cultural understanding.`,
    prereqs: [ARAB2101],
    grade: null,
    section: null,
    credits: 4,
  });
  
// English

export const ENGL2024 = new Course({
  name: "Critical Strategies",
  code: 2024,
  department: Department.ENGL,
  description: `Focuses on developing critical reading and analytical skills, exploring various strategies for interpreting literary texts.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2025 = new Course({
  name: "Fiction",
  code: 2025,
  department: Department.ENGL,
  description: `An examination of different forms and genres of fiction, analyzing narrative techniques, themes, and historical context.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2027 = new Course({
  name: "Poetry",
  code: 2027,
  department: Department.ENGL,
  description: `Studies various forms of poetry, focusing on interpretation, poetic devices, and the evolution of poetic styles over time.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2029 = new Course({
  name: "Drama",
  code: 2029,
  department: Department.ENGL,
  description: `Explores the genre of drama, covering major playwrights, historical periods, and the elements of theatrical production and performance.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2123 = new Course({
  name: "Studies in Literary Traditions and Themes",
  code: 2123,
  department: Department.ENGL,
  description: `Analyzes various literary traditions and themes, exploring how they manifest in different cultural and historical contexts.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2148 = new Course({
  name: "Shakespeare",
  code: 2148,
  department: Department.ENGL,
  description: `A comprehensive study of Shakespeare's works, including his plays and sonnets, examining their literary significance and historical impact.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2201 = new Course({
  name: "Introduction to World Literary Traditions",
  code: 2201,
  department: Department.ENGL,
  description: `Provides a global perspective on literature, exploring diverse literary traditions and texts from various cultures and epochs.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2202 = new Course({
  name: "Introduction to Modern World Literature",
  code: 2202,
  department: Department.ENGL,
  description: `Focuses on 20th and 21st-century world literature, examining modern literary movements and the evolution of global literary trends.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2220 = new Course({
  name: "Major British Authors",
  code: 2220,
  department: Department.ENGL,
  description: `Studies significant British authors, their works, and their contributions to the canon of English literature.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2270 = new Course({
  name: "Major American Authors",
  code: 2270,
  department: Department.ENGL,
  description: `An exploration of major American authors and their literary works, focusing on their influence on American literature and culture.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2300 = new Course({
  name: "Interpreting Discourse",
  code: 2300,
  department: Department.ENGL,
  description: `Focuses on the analysis and interpretation of various forms of discourse, including written, spoken, and visual texts.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2593 = new Course({
  name: "Images of Women: An Introduction",
  code: 2593,
  department: Department.ENGL,
  description: `Examines the representation of women in literature, exploring how gender roles and identities are constructed and challenged in texts.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2673 = new Course({
  name: "Literature and Ethnicity",
  code: 2673,
  department: Department.ENGL,
  description: `Explores how ethnicity and cultural identity are represented and explored in literary works from various ethnic backgrounds.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2674 = new Course({
  name: "Introduction to African American Literature",
  code: 2674,
  department: Department.ENGL,
  description: `An introductory study of African American literature, covering key authors, historical periods, and thematic developments.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// Philosophy

export const PHI1000 = new Course({
  name: "Introduction to Philosophy",
  code: 1000,
  department: Department.PHI,
  description: `Provides an overview of key philosophical concepts, thinkers, and schools of thought, introducing students to the field of philosophy.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const PHI2020 = new Course({
  name: "Ethics",
  code: 2020,
  department: Department.PHI,
  description: `Explores ethical theories and moral philosophy, examining questions of right and wrong, justice, and moral reasoning.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const PHI2023 = new Course({
  name: "Philosophy of Art",
  code: 2023,
  department: Department.PHI,
  description: `Examines philosophical theories and concepts related to art, aesthetics, and artistic expression.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const PHI2024 = new Course({
  name: "Philosophy in Literature",
  code: 2024,
  department: Department.PHI,
  description: `Analyzes philosophical themes and ideas as they are represented and explored in literary works.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const PHI2028 = new Course({
  name: "Philosophy of Religion",
  code: 2028,
  department: Department.PHI,
  description: `Discusses philosophical perspectives on religion, covering topics like faith, reason, and the nature of religious beliefs.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const PHI2033 = new Course({
  name: "History of Ancient and Medieval Philosophy",
  code: 2033,
  department: Department.PHI,
  description: `Traces the development of philosophical thought from ancient times through the medieval period, focusing on key philosophers and ideas.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const PHI2035 = new Course({
  name: "History of Modern Philosophy",
  code: 2035,
  department: Department.PHI,
  description: `Explores the evolution of philosophical thought from the Renaissance to the present, highlighting significant thinkers and movements.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const GenEdHums: Course[] = [
  AAAS2000,
  ARAB1101,
  ARAB1102,
  ARAB2101,
  ARAB2102,
  ENGL2024,
  ENGL2025,
  ENGL2027,
  ENGL2029,
  ENGL2123,
  ENGL2148,
  ENGL2201,
  ENGL2202,
  ENGL2220,
  ENGL2270,
  ENGL2300,
  ENGL2593,
  ENGL2673,
  ENGL2674,
  PHI1000,
  PHI2020,
  PHI2023,
  PHI2024,
  PHI2028,
  PHI2033,
  PHI2035
];  