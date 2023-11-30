import { Course, Department } from "../course";

export const ENGL1000 = new Course({
  name: "English for Academic Success",
  code: 1000,
  department: Department.ENGL,
  description: `Designed to enhance academic English skills, focusing on reading, writing, and oral communication to prepare students for success in university-level courses.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL1001 = new Course({
  name: "English Composition",
  code: 1001,
  department: Department.ENGL,
  description: `Introduces students to the basics of academic writing, emphasizing the development of ideas, coherent essays, and critical thinking skills.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL1004 = new Course({
  name: "English Composition",
  code: 1004,
  department: Department.ENGL,
  description: `Similar to ENGL1001, this course focuses on essay writing and analytical skills, with additional emphasis on research and argumentative writing techniques.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL1005 = new Course({
  name: "English Composition",
  code: 1005,
  department: Department.ENGL,
  description: `Expands on composition skills taught in ENGL1001 and ENGL1004, with a focus on developing more sophisticated writing techniques and in-depth analyses.`,
  prereqs: [ENGL1004],
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL1051 = new Course({
  name: "Spoken English for International Graduate Assistants",
  code: 1051,
  department: Department.ENGL,
  description: `Tailored for international graduate assistants, this course enhances spoken English skills, emphasizing pronunciation, fluency, and classroom communication techniques.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2000 = new Course({
    name: "English Composition",
    code: 2000,
    department: Department.ENGL,
    description: `Focuses on developing students' writing skills, emphasizing clarity, organization, and the development of ideas in well-constructed essays.`,
    prereqs: [ENGL1001],
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2001 = new Course({
    name: "Advanced English Composition",
    code: 2001,
    department: Department.ENGL,
    description: `Builds upon basic writing skills, introducing advanced composition techniques for crafting more complex essays and arguments.`,
    prereqs: [ENGL2000],
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2002 = new Course({
    name: "Business Writing",
    code: 2002,
    department: Department.ENGL,
    description: `Teaches effective communication in business settings, focusing on writing reports, proposals, and professional correspondence.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2004 = new Course({
    name: "Intro to Writing Creative Nonfiction",
    code: 2004,
    department: Department.ENGL,
    description: `Introduces the techniques of creative nonfiction writing, blending literary artistry with factual narratives.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2005 = new Course({
    name: "Introduction to Writing Short Stories",
    code: 2005,
    department: Department.ENGL,
    description: `Focuses on the craft of writing short stories, covering elements of narrative structure, character development, and dialogue.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2007 = new Course({
    name: "Introduction to Writing Poetry",
    code: 2007,
    department: Department.ENGL,
    description: `Explores the art of poetry writing, including various forms, techniques, and the expression of personal voice and style.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2008 = new Course({
    name: "Introduction to Writing Drama",
    code: 2008,
    department: Department.ENGL,
    description: `Teaches the basics of writing for the stage, focusing on scriptwriting, character development, and dramatic structure.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2009 = new Course({
    name: "Introduction to Writing Screenplays",
    code: 2009,
    department: Department.ENGL,
    description: `Covers the fundamentals of screenplay writing, including scene construction, dialogue, and character arcs for film and television.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2012 = new Course({
    name: "Practical Grammar and Usage",
    code: 2012,
    department: Department.ENGL,
    description: `Focuses on the practical aspects of English grammar and usage, enhancing writing clarity, coherence, and correctness.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });

  export const ENGL2024 = new Course({
    name: "Critical Strategies",
    code: 2024,
    department: Department.ENGL,
    description: `This course delves into various critical theories and approaches for analyzing literary texts, enhancing students' interpretive and analytical skills.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2025 = new Course({
    name: "Fiction",
    code: 2025,
    department: Department.ENGL,
    description: `Examines the genre of fiction, exploring different narrative styles, themes, and historical developments in short stories and novels.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2027 = new Course({
    name: "Poetry",
    code: 2027,
    department: Department.ENGL,
    description: `Focuses on the study of poetry, covering a range of poetic forms, techniques, and movements, along with analysis of poetic language and themes.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2029 = new Course({
    name: "Drama",
    code: 2029,
    department: Department.ENGL,
    description: `Analyzes dramatic literature, discussing the evolution of theatrical styles, major playwrights, and the socio-cultural impact of drama.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2085 = new Course({
    name: "Science Fiction Studies",
    code: 2085,
    department: Department.ENGL,
    description: `An in-depth exploration of science fiction literature, examining its themes, narrative structures, and role in addressing socio-scientific issues.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2086 = new Course({
    name: "Fantasy Literature",
    code: 2086,
    department: Department.ENGL,
    description: `Delves into the genre of fantasy literature, studying its history, major works, and thematic elements, along with its cultural and imaginative significance.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2102 = new Course({
    name: "Business Writing for International Students",
    code: 2102,
    department: Department.ENGL,
    description: `Tailored for international students, this course enhances business communication skills, focusing on writing styles, formats, and cultural nuances in professional settings.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2123 = new Course({
    name: "Studies in Literary Traditions and Themes",
    code: 2123,
    department: Department.ENGL,
    description: `Investigates various literary traditions and recurring themes across cultures and historical periods, encouraging comparative and thematic analyses.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2148 = new Course({
    name: "Shakespeare",
    code: 2148,
    department: Department.ENGL,
    description: `Provides a comprehensive study of Shakespeare's works, exploring his plays and sonnets in the context of Elizabethan and Jacobean literature and culture.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });

  export const ENGL2173 = new Course({
    name: "Louisiana Literature",
    code: 2173,
    department: Department.ENGL,
    description: `Explores the rich literary heritage of Louisiana, examining works by authors from the state and literature that reflects its unique cultural, historical, and ecological landscape.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2201 = new Course({
    name: "Introduction to World Literary Traditions",
    code: 2201,
    department: Department.ENGL,
    description: `Provides an overview of literary traditions from around the world, exploring diverse texts and cultural narratives from various historical periods.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2202 = new Course({
    name: "Introduction to Modern World Literature",
    code: 2202,
    department: Department.ENGL,
    description: `Focuses on contemporary literary works from a global perspective, examining modern themes, narrative techniques, and the impact of cultural and historical contexts.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2220 = new Course({
    name: "Major British Authors",
    code: 2220,
    department: Department.ENGL,
    description: `Studies key British authors and their literary contributions, spanning from the medieval period to the present, highlighting their influence on English literature.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2222 = new Course({
    name: "Popular Fictions",
    code: 2222,
    department: Department.ENGL,
    description: `Analyzes popular fiction genres such as mystery, romance, and thriller, exploring their narrative structures, themes, and cultural significance.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2231 = new Course({
    name: "Reading Film",
    code: 2231,
    department: Department.ENGL,
    description: `Examines cinema as a form of artistic and narrative expression, discussing film theory, analysis, and the historical development of cinematic styles and genres.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2270 = new Course({
    name: "Major American Authors",
    code: 2270,
    department: Department.ENGL,
    description: `Focuses on significant American authors, analyzing their works within the context of American literary history and broader cultural movements.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });
  
  export const ENGL2300 = new Course({
    name: "Interpreting Discourse",
    code: 2300,
    department: Department.ENGL,
    description: `This course teaches analytical skills for understanding and interpreting various forms of discourse, including literary, political, and media texts.`,
    prereqs: null,
    grade: null,
    section: null,
    credits: 3,
  });

export const ENGL2423 = new Course({
  name: "Introduction to Folklore",
  code: 2423,
  department: Department.ENGL,
  description: `This course delves into the study of folklore, encompassing myths, legends, folktales, and oral traditions, exploring their role in shaping cultural heritage and identity.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2593 = new Course({
  name: "Gender and Literature",
  code: 2593,
  department: Department.ENGL,
  description: `Examines the representation of gender in literature, exploring how gender roles, identities, and relations are portrayed and constructed in various literary texts.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2673 = new Course({
  name: "Literature and Ethnicity",
  code: 2673,
  department: Department.ENGL,
  description: `Analyzes literary works that explore themes of ethnicity and cultural identity, examining how literature reflects and shapes perceptions of ethnic and cultural experiences.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2674 = new Course({
  name: "Introduction to African-American Literature",
  code: 2674,
  department: Department.ENGL,
  description: `Provides an overview of African-American literature, covering key authors, historical contexts, and thematic developments from the 18th century to the present.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2710 = new Course({
  name: "Descriptive Grammar of English",
  code: 2710,
  department: Department.ENGL,
  description: `Focuses on the structure of the English language, including syntax, morphology, and phonology, exploring contemporary approaches to English grammar.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2716 = new Course({
  name: "Language Diversity, Society, & Power",
  code: 2716,
  department: Department.ENGL,
  description: `Examines the sociolinguistic aspects of language, including dialects, language variation, and the relationship between language use, social structures, and power dynamics.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2823 = new Course({
  name: "HONORS: Studies in Literary Traditions and Themes",
  code: 2823,
  department: Department.ENGL,
  description: `An honors course that provides an in-depth analysis of literary traditions and themes, focusing on critical interpretation and scholarly research methods.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2824 = new Course({
  name: "HONORS: Critical Analysis of Literature",
  code: 2824,
  department: Department.ENGL,
  description: `This honors course emphasizes advanced critical thinking and analytical skills in the study of literature, fostering a deeper understanding of literary texts and contexts.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ENGL2920 = new Course({
  name: "Independent Work",
  code: 2920,
  department: Department.ENGL,
  description: `Allows students to pursue independent research or creative projects in English, under the mentorship of a faculty member, tailored to their academic interests.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 1,
});

export const ENGL2921 = new Course({
  name: "Independent Work",
  code: 2921,
  department: Department.ENGL,
  description: `Continues the independent study initiated in ENGL2920, enabling students to delve deeper into their chosen topic or project with faculty guidance.`,
  prereqs: [ENGL2920],
  grade: null,
  section: null,
  credits: 1,
});

export const ENGL2922 = new Course({
  name: "Independent Work",
  code: 2922,
  department: Department.ENGL,
  description: `Offers an advanced opportunity for independent study or project work, encouraging students to develop original research or creative contributions in their field of interest.`,
  prereqs: [ENGL2921],
  grade: null,
  section: null,
  credits: 1,
});
  
// Honors

export const HNRS2000 = new Course({
  name: "Critical Analysis",
  code: 2000,
  department: Department.HNRS,
  description: `Focuses on developing advanced critical thinking and analytical skills, teaching students to evaluate and interpret complex texts and arguments.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const HNRS2012 = new Course({
  name: "The 19th Century",
  code: 2012,
  department: Department.HNRS,
  description: `Explores significant cultural, social, and political developments of the 19th century, examining key historical events and their impact on modern society.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const HNRS2013 = new Course({
  name: "The 20th Century",
  code: 2013,
  department: Department.HNRS,
  description: `Analyzes the major events and movements of the 20th century, including wars, technological advancements, and social transformations.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const HNRS2020 = new Course({
  name: "Contemporary Studies",
  code: 2020,
  department: Department.HNRS,
  description: `Examines current global issues and trends, discussing their historical roots and future implications in a rapidly changing world.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const HNRS2021 = new Course({
  name: "Colloquium in the Arts",
  code: 2021,
  department: Department.HNRS,
  description: `Provides an interdisciplinary exploration of the arts, discussing various forms, historical contexts, and the role of art in society.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const HNRS2030 = new Course({
  name: "Humanities Colloquium",
  code: 2030,
  department: Department.HNRS,
  description: `Engages students in critical discussions on a range of topics in the humanities, encouraging a deeper understanding of cultural and philosophical issues.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const HNRS2033 = new Course({
  name: "Social Science Colloquium",
  code: 2033,
  department: Department.HNRS,
  description: `Focuses on contemporary debates and research in the social sciences, analyzing the impact of social issues on individuals and communities.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const HNRS2402 = new Course({
  name: "Classical Civilization in the Mediterranean World",
  code: 2402,
  department: Department.HNRS,
  description: `Explores the civilizations of ancient Greece and Rome, examining their contributions to modern Western culture, politics, and philosophy.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const HNRS2404 = new Course({
  name: "Medieval Civilization in Western Europe",
  code: 2404,
  department: Department.HNRS,
  description: `Studies the medieval period in Western Europe, discussing its historical significance, cultural developments, and lasting impacts on European society.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const HNRS2406 = new Course({
  name: "European Civilization from 1400 to 1789",
  code: 2406,
  department: Department.HNRS,
  description: `Covers key events and developments in European civilization from the Renaissance to the French Revolution, exploring their historical and cultural contexts.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const HNRS2408 = new Course({
  name: "Modern Europe",
  code: 2408,
  department: Department.HNRS,
  description: `Analyzes the history of modern Europe, focusing on political, social, and economic changes from the 18th century to the present.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const GenEdHumEnglOrHnrses: Course[] = [
  ENGL1000,
  ENGL1001,
  ENGL1004,
  ENGL1005,
  ENGL1051,
  ENGL2000,
  ENGL2001,
  ENGL2002,
  ENGL2004,
  ENGL2005,
  ENGL2007,
  ENGL2008,
  ENGL2009,
  ENGL2012,
  ENGL2024,
  ENGL2025,
  ENGL2027,
  ENGL2029,
  ENGL2085,
  ENGL2086,
  ENGL2102,
  ENGL2123,
  ENGL2148,
  ENGL2173,
  ENGL2201,
  ENGL2202,
  ENGL2220,
  ENGL2222,
  ENGL2231,
  ENGL2270,
  ENGL2300,
  ENGL2423,
  ENGL2593,
  ENGL2673,
  ENGL2674,
  ENGL2710,
  ENGL2716,
  ENGL2823,
  ENGL2824,
  ENGL2920,
  ENGL2921,
  ENGL2922,
  HNRS2000,
  HNRS2012,
  HNRS2013,
  HNRS2020,
  HNRS2021,
  HNRS2030,
  HNRS2033,
  HNRS2402,
  HNRS2404,
  HNRS2406,
  HNRS2408,
];  