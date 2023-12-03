import { Course, Department } from "../course";

export const CSC2362 = new Course({
  name: "Intro to CyberSecurity",
  code: 2362,
  department: Department.CSC,
  description: `Broad overview and basic principles of cybersecurity theory and practice: threats, vulnerabilities, and mitigation strategies.`,
  prereqs: [],
  grade: null,
  section: null,
  credits: 3,
});

export const CSC2463 = new Course({
    name: "Programming Digital Media",
    code: 2463,
    department: Department.CSC,
    description: `Programming concepts motivated by digital media applications: real-time graphics, audio processing, simple hardware devices, integration of technologies into interactive systems.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
  });

  export const CSC2610 = new Course({
    name: "Cloud Fundamentals & Web Programming",
    code: 2610,
    department: Department.CSC,
    description: `Characteristics, theory and fundamentals of cloud computing and related technologies; cloud types, services and architectures; principles of application protocols and collaborative web platforms; applications in the areas of mobile and social computing; lightweight programming models; socket programming.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
  });

  export const CSC2000Electives: Course[] = [
    CSC2362,
    CSC2463,
    CSC2610
  ];