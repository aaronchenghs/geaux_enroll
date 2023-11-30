import { Course, Department } from "../course";

// African American Studies

export const AAAS2000 = new Course({
  name: "Introduction to African & African American Studies",
  code: 2000,
  department: Department.AAAS,
  description: `Dimensions of African & African American thought and practice in contemporary and historical perspective.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const AAAS2050 = new Course({
  name: "Contemporary Africa",
  code: 2050,
  department: Department.AAAS,
  description: `African social and political institutions in transition; challenges of democratization and development in the current international context.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// Agricultural Economics

export const AGEC2003 = new Course({
  name: "Introduction to Agricultural Economics",
  code: 2003,
  department: Department.AGEC,
  description: `Introduces the principles of economics within the context of the agricultural industry, covering topics like market dynamics, food production, and resource management.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// Anthropology

export const ANTH1001 = new Course({
  name: "Introduction to Physical Anthropology and Prehistory",
  code: 1001,
  department: Department.ANTH,
  description: `Covers the study of human evolution, biological diversity, and the fossil record, providing an understanding of human origins and prehistory.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ANTH1003 = new Course({
  name: "Introduction to Cultural and Social Anthropology",
  code: 1003,
  department: Department.ANTH,
  description: `Explores various cultures and societies, examining social structures, cultural norms, and the diversity of human experiences across the world.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ANTH2015 = new Course({
  name: "Introduction to Archaeology",
  code: 2015,
  department: Department.ANTH,
  description: `Provides an overview of archaeological methods and theories, exploring how archaeologists study past human societies and cultures.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ANTH2050 = new Course({
  name: "World Archaeology",
  code: 2050,
  department: Department.ANTH,
  description: `Examines archaeological sites and findings from around the globe, discussing their significance in understanding human history and culture.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ANTH2051 = new Course({
  name: "Introduction to World Ethnography",
  code: 2051,
  department: Department.ANTH,
  description: `Focuses on the comparative study of cultures and societies, utilizing ethnographic data to understand human behavior and social organization.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ANTH2423 = new Course({
  name: "Introduction to Folklore",
  code: 2423,
  department: Department.ANTH,
  description: `Explores folklore traditions, myths, and oral histories, analyzing their role in shaping cultural identities and community practices.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// economics

export const ECON2000 = new Course({
  name: "Principles of Microeconomics",
  code: 2000,
  department: Department.ECON,
  description: `Introduces the basic concepts of microeconomics including supply and demand, market structures, consumer behavior, and the theory of the firm.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ECON2010 = new Course({
  name: "Principles of Macroeconomics",
  code: 2010,
  department: Department.ECON,
  description: `Covers macroeconomic principles, such as national income, economic growth, inflation, unemployment, and monetary and fiscal policy.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const ECON2030 = new Course({
  name: "Economic Principles",
  code: 2030,
  department: Department.ECON,
  description: `Provides an overview of fundamental economic concepts, combining elements from both microeconomics and macroeconomics.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

// Psychology

export const PSYC2000 = new Course({
  name: "Introduction to Psychology",
  code: 2000,
  department: Department.PSYC,
  description: `Introduction to Psychology provides a comprehensive overview of the field, covering major theories, concepts, and areas of study. This course explores the scientific study of human behavior and mental processes, including topics like learning, memory, cognition, development, personality, and abnormal psychology. Students will also be introduced to research methods in psychology, understanding how psychological knowledge is generated and applied. The course aims to provide a solid foundation for further study in psychology and related disciplines, as well as practical insights into human behavior applicable to everyday life.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const PSYC2004 = new Course({
  name: "Psychology of Adjustment",
  code: 2004,
  department: Department.PSYC,
  description: `Psychology of Adjustment focuses on understanding the psychological processes involved in adapting to life's various challenges and changes. This course examines coping mechanisms, stress management, interpersonal relationships, and personal growth. Students will learn about the psychological factors that contribute to well-being and resilience, exploring topics such as self-concept, motivation, emotional intelligence, and mental health. The course provides valuable insights for students seeking to improve their adjustment skills and overall quality of life.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const PSYC3081 = new Course({
  name: "Personality",
  code: 3081,
  department: Department.PSYC,
  description: `Personality delves into the study of individual differences in behavior, emotion, and thought patterns. This course covers various personality theories, including psychoanalytic, trait, cognitive, behavioral, and humanistic perspectives. Students will explore how personality is assessed and measured, the role of genetics and environment in shaping personality, and the implications of personality research for understanding human behavior. The course also discusses the application of personality theories in areas such as clinical psychology, work settings, and personal development.`,
  prereqs: null,
  grade: null,
  section: null,
  credits: 3,
});

export const GenEdSocialSciences: Course[] = [
  AAAS2000,
  AAAS2050,
  AGEC2003,
  ANTH1001,
  ANTH1003,
  ANTH2015,
  ANTH2050,
  ANTH2051,
  ANTH2423,
  ECON2000,
  ECON2010,
  ECON2030,
  PSYC2000,
  PSYC2004,
  PSYC3081
];