import {
  CategoryCourse,
  CoreCourse,
  Course,
  CourseType,
  Department,
} from "../course";
import { Degree } from "../degree";
import { TechElectivesB } from "./TechElectivesB";

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
  description: `Calculus 2 delves further into the world of integral calculus. 
    Students will study techniques of integration, sequences, series, and the applications of integrals.
     The course emphasizes understanding these concepts graphically, numerically, and analytically. 
     Real-world scenarios underscore the importance of advanced calculus concepts in diverse disciplines.`,
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
  description: `This course delves into the architecture, design, and implementation of 
    large-scale software systems. Students will learn methodologies and 
    tools for software engineering, including requirements analysis, design
     patterns, testing, and documentation. Emphasis will be placed on 
     understanding the entire software development lifecycle and best 
     practices for building robust, maintainable software systems.`,
  prereqs: [CSC3380, CSC3102],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC4103 = new CoreCourse({
  name: "Operating Systems",
  code: 4103,
  department: Department.CS,
  description: ` Operating Systems provides a comprehensive overview of 
    the principles and workings of modern operating systems. 
    Topics include process management, memory management, file systems,
     I/O management, and security. Students will also learn about 
     concurrency, scheduling, and inter-process communication, providing
      a deep understanding of the underlying mechanisms that support 
      application execution.`,
  prereqs: [CSC3380], // Prerequisite is OO Design
  courseType: [],
  grade: null,
  section: null,
});
export const CSC4402 = new Course({
  name: "Database Management Systems",
  code: 4402,
  department: Department.CS,
  description: `This course introduces students to the design, 
    implementation, and management of relational databases. Topics
     covered include data modeling, normalization, SQL, transaction
      management, and database recovery techniques. Students will 
      also learn about distributed databases, NoSQL databases, and 
      the principles of database security and integrity.`,
  prereqs: [CSC4330], // Prerequisite is Software Sys
  courseType: [],
  grade: null,
  section: null,
});
export const CSC4351 = new CoreCourse({
  name: "Compiler Construction",
  code: 4351,
  department: Department.CS,
  description: `Compiler Construction offers a detailed examination of 
    the theory and practice of compiler design and construction. Students 
    will learn about lexical analysis, syntax analysis, semantic analysis, 
    optimization, and code generation. The course will also cover topics 
    like parsing techniques, intermediate representations, and code 
    optimization strategies. By the end of the course, students will 
    have hands-on experience building a functional compiler.`,
  prereqs: [CSC4103], // Prerequisite is Op Sys
  courseType: [],
  grade: null,
  section: null,
});
export const CSC3501 = new Course({
  name: "Computer Organization & Design",
  code: 3501,
  department: Department.CS,
  description: `This course provides an introduction to the architecture
     and organization of computer systems. Topics include digital logic, 
     computer arithmetic, data path design, control units, memory 
     hierarchy, and I/O interfacing. Students will gain an understanding
      of how hardware and software components interact, ensuring a 
      comprehensive understanding of computer system design from the 
      ground up.`,
  prereqs: [CSC2259],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC4101 = new CoreCourse({
  name: "Programming Languages",
  code: 4101,
  department: Department.CS,
  description: ` This course provides an in-depth exploration into 
    the design, implementation, and evaluation of programming languages.
     Students will learn about the fundamental constructs that underlie 
     programming languages, including syntax, semantics, and grammar. 
     Topics may include imperative, functional, logic, and object-oriented
      programming paradigms, as well as type systems and language 
      translation techniques. By the end of the course, students will 
      have a deep understanding of how different languages approach
      problem-solving and will be better equipped to choose the right
    language for a given task.`,

  prereqs: [CSC3501], // Prerequisite is Comp Org & Design
  courseType: [],
  grade: null,
  section: null,
});
export const MATH2090 = new Course({
  name: "Differential Equations & Linear Algebra",
  code: 2090,
  department: Department.MATH,
  description: `This course introduces students to the foundational
     concepts of differential equations and linear algebra. Topics in 
     differential equations include first-order and higher-order equations,
      systems of differential equations, and boundary value problems. 
      Linear algebra topics cover vector spaces, matrices, determinants,
       eigenvalues, and eigenvectors. Applications to engineering, 
       physics, and computer science problems will be explored.`,

  prereqs: [MATH1552],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC2262 = new Course({
  name: "Numerical Methods",
  code: 2262,
  department: Department.CS,
  description: `Numerical Methods provides students with techniques to 
    solve mathematical problems computationally. Topics include numerical
     solutions to equations, interpolation, numerical differentiation and
      integration, and solutions to differential equations. Emphasis is 
      placed on algorithm development, accuracy, stability, and efficiency
       of numerical techniques. Students will implement and apply numerical
        methods using programming tools.`,

  prereqs: [MATH1552, CSC1351],
  courseType: [],
  grade: null,
  section: null,
});
export const IE3302 = new Course({
  name: "Statistics",
  code: 3302,
  department: Department.IE,
  description: `This course offers an introduction to statistical 
    methods and their applications in engineering and science. Topics 
    include probability distributions, statistical inference, hypothesis 
    testing, regression analysis, and experimental design. Students will 
    learn to apply statistical techniques to analyze and interpret data, 
    making informed decisions based on statistical evidence.`,

  prereqs: [CSC2262, MATH1552],
  courseType: [],
  grade: null,
  section: null,
});
export const ENGL2000 = new CoreCourse({
  name: "English 2000",
  code: 2000,
  department: Department.ENGL,
  description: `English 2000 is a foundational course in academic 
    writing and critical thinking. Students will engage with a variety
     of texts, exploring themes and analyzing rhetorical strategies. 
     Emphasis is placed on developing clear, coherent, and persuasive 
     arguments in writing. Students will practice research skills, source
      evaluation, and proper citation methods to produce well-informed and
       well-structured essays.`,

  prereqs: [],
  courseType: [],
  grade: null,
  section: null,
});
export const CSC3200 = new CoreCourse({
  name: "Ethics in Computing",
  code: 3200,
  department: Department.CS,
  description: `Ethics in Computing delves into the moral and 
    ethical challenges faced in the field of computing. Topics include 
    data privacy, cybersecurity, artificial intelligence ethics, 
    intellectual property, and the societal impact of computing. 
    Students will engage in discussions and case studies to explore
     the ethical considerations of real-world computing scenarios and
      learn to make informed ethical decisions in their professional 
      careers.`,

  prereqs: [ENGL2000, CSC3102],
  courseType: [],
  grade: null,
  section: null,
});
export const TechElectiveA = new CategoryCourse({
  name: "Tech Elective A",

  description: ` This course category allows students to choose from a 
    list of technical electives that cater to various specializations 
    within the field of computer science. The electives under this 
    category aim to provide deeper knowledge in specific areas, 
    enabling students to tailor their education based on their 
    interests and career goals.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const TechElectiveAorB = new CategoryCourse({
  name: "Tech Elective A or B",

  description: `This course category allows students to choose from a 
    list of technical electives that cater to various specializations 
    within the field of computer science. The electives under this 
    category aim to provide deeper knowledge in specific areas, 
    enabling students to tailor their education based on their 
    interests and career goals.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [...TechElectivesB],
  optionTaken: null,
});
export const CSC2000Elective = new CategoryCourse({
  name: "CSC 2+++",

  description: `This course category pertains to computer science 
    electives that fall within the 2000 level range. These courses offer 
    students the opportunity to delve into intermediate topics in computer
     science, building upon foundational knowledge and preparing them for
      more advanced coursework.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const CSC2000ElectiveSeg = new CategoryCourse({
  name: "CSC 2+++ (Seg)",

  description: `This course category pertains to computer science 
    electives that fall within the 2000 level range. These courses offer 
    students the opportunity to delve into intermediate topics in computer
     science, building upon foundational knowledge and preparing them for
      more advanced coursework.`,
  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const CSC3000Elective = new CategoryCourse({
  name: "CSC 3+++",
  description: `This course category pertains to computer science electives that fall within the 3000 level range. These courses offer students an opportunity to explore advanced intermediate topics within the realm of computer science. With a focus on specialized areas, students can build upon their foundational and intermediate knowledge, diving deeper into specific subfields of interest.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const CSC4000Elective = new CategoryCourse({
  name: "CSC 4+++",
  description: `This category represents the pinnacle of computer science electives at the 4000 level. Courses under this category dive into advanced topics and cutting-edge technologies, allowing students to gain deep expertise in specific areas of computer science. These electives often involve more complex projects and research-oriented topics.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const AreaElective1 = new CategoryCourse({
  name: "Area Elective 1",
  description: `Area Elective 1 provides students with a selection of courses that delve into specific areas or tracks within computer science. Whether it's artificial intelligence, cybersecurity, or software engineering, students can choose courses that align with their passion and career aspirations, ensuring a well-rounded and specialized education.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const AreaElective2 = new CategoryCourse({
  name: "Area Elective 2",
  description: `Similar to Area Elective 1, this category offers a diverse range of courses focusing on distinct areas within computer science. Students have the flexibility to explore different specializations or further deepen their knowledge in a chosen track, tailoring their academic journey to their unique interests.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const ApprovedElective1 = new CategoryCourse({
  name: "Approved Elective 1",
  description: `Approved Elective 1 offers a curated list of courses that, while not exclusively within the computer science department, are relevant and beneficial to a computer science student's education. These courses might span interdisciplinary topics, providing students with a broader perspective and a diverse skill set.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const ApprovedElective2 = new CategoryCourse({
  name: "Approved Elective 2",
  description: `This category, akin to Approved Elective 1, provides another set of interdisciplinary courses that have been approved for computer science students. These electives allow students to venture outside the traditional boundaries of computer science, exploring how the field intersects with areas like business, art, or biology.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdSocialScience = new CategoryCourse({
  name: "General Education: Social Science",
  description: ` This course category encompasses a range of advanced social science courses at the 2000 level and above. Students have the opportunity to explore various facets of human society, including anthropology, sociology, psychology, and political science. These courses aim to broaden students' understanding of societal structures, human behavior, and the intricacies of social dynamics.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdSocialScience2000 = new CategoryCourse({
  name: "General Education: Social Science 2+++",
  description: ` This course category encompasses a range of advanced social science courses at the 2000 level and above. Students have the opportunity to explore various facets of human society, including anthropology, sociology, psychology, and political science. These courses aim to broaden students' understanding of societal structures, human behavior, and the intricacies of social dynamics.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdArt = new CategoryCourse({
  name: "General Education: Art",
  description: `This category offers students a journey into the world of visual and performing arts. Whether it's studying the history of art, engaging in hands-on artistic creation, or appreciating the nuances of music and theater, courses under this category aim to foster creativity and an appreciation for diverse artistic expressions.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdHumEnglOrHnrs = new CategoryCourse({
  name: "General Education: Humanities, ENGL, or 2000+",
  description: `This diverse category provides students with courses that delve into the humanities, including literature, philosophy, history, and more. Whether exploring classic English literature, delving into global philosophical discussions, or studying advanced topics in the humanities, students are encouraged to think critically and engage with diverse cultural and historical perspectives.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdHum = new CategoryCourse({
  name: "General Education: Humanities",
  description: `This category focuses exclusively on the humanities, offering courses that study human culture and thought. Topics might range from ancient civilizations to contemporary global issues, emphasizing critical thinking, analysis, and the exploration of human experiences across time and space.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const GenEdHumCMST = new CategoryCourse({
  name: "General Education: Humanities CMST",
  description: `Under this category, students explore courses related to Communication Studies (CMST) within the broader realm of humanities. These courses delve into topics such as interpersonal communication, rhetoric, media studies, and public speaking. Students will gain insights into the nuances of communication, its impact on society, and its role in shaping human interactions.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const PhysicalScienceSequence1 = new CategoryCourse({
  name: "Physical Sci Requirement",
  description: `This category represents the first course in a sequence of physical science requirements. Students will delve into foundational concepts of physical sciences such as physics or chemistry. Topics may cover basic principles, laws, and theories that explain the nature and behavior of matter and energy. These courses aim to provide a solid grounding in the core principles of physical sciences.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const PhysicalScienceSequence2 = new CategoryCourse({
  name: "Science Sequence II Requirement",
  description: `As a continuation of the first sequence, this category offers advanced topics in the realm of physical sciences. Building upon the foundational knowledge from the previous course, students will explore more intricate concepts, applications, and phenomena within physics, chemistry, or other related disciplines. Emphasis is placed on understanding the underlying principles and their real-world applications.`,

  prereqs: null,
  courseType: [],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const PhysicalScienceSequence1Lab = new CategoryCourse({
  name: "Science Seq I Lab",
  description: `Accompanying the first course in the physical science sequence, this laboratory component allows students to engage in hands-on experiments and practical applications of the theoretical concepts learned in class. Through a series of guided experiments, students will observe, measure, and analyze physical phenomena, fostering a deeper understanding and appreciation for the scientific method.`,

  prereqs: null,
  courseType: [CourseType.LAB],
  grade: null,
  section: null,
  options: [],
  optionTaken: null,
});
export const PhysicalScienceSequence2Lab = new CategoryCourse({
  name: "Science Seq II Lab",
  description: `This lab complements the second course in the science sequence, providing advanced experimental opportunities. Building on the skills and knowledge from the initial lab, students will conduct more complex experiments, analyze results, and draw conclusions based on empirical evidence. The lab emphasizes critical thinking, precision, and the practical application of advanced physical science concepts.`,

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
