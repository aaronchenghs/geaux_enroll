import { Section } from "./section";

export class Course {
  name: string;

  code: number;
  department: Department;

  description: string | null;
  prereqs: Course[];
  courseType: CourseType[] | null;

  grade: Grade | null;
  private _section: Section | null;

  constructor(
    name: string,
    code: number,
    department: Department,
    description: string,
    prereqs: Course[] | null = null,
    courseType: CourseType[] | null = null,
    grade: Grade | null = null,
    section: Section | null = null,
  ) {
    this.name = name;

    this.code = code;
    this.department = department;

    this.description = description;
    this.prereqs = prereqs != null ? prereqs : [];
    this.courseType = courseType;

    this.grade = grade;
    this._section = section;
  }

  get section(): Section | null {
    return this._section;
  }

  set section(input: Section | null) {
    this._section = input;
  }

  get courseAbreviation(): string {
    return this.department.toUpperCase() + " " + this.code.toString();
  }

  // Returns true if the grade awarded is sufficent to pass the course
  didPass(): boolean {
    return this.grade != null && this.grade != Grade.F;
  }

  hasPrereqs(): boolean {
    return this.prereqs.length > 0;
  }

  equals(other: Course): boolean {
    return this.code == other.code;
  }

  arePrereqsMeetBy(completedCourses: Course[]): boolean {
    if (this.hasPrereqs() == false) return true;

    this.prereqs.forEach((prereq: Course) => {
      const reqAchived: boolean =
        completedCourses.find((canidateCourse) => {
          return canidateCourse.equals(prereq) && canidateCourse.didPass();
        }) != undefined;

      if (reqAchived == false) {
        return false;
      }
    });

    return true;
  }
}

// Course you have to get a C or higher in
export class CoreCourse extends Course {
  didPass(): boolean {
    return this.grade != null && this.grade in [Grade.A, Grade.B, Grade.C];
  }
}

// Course where you have a few options - like Physical Science
export class CatagoryCourse extends Course {
  options: Course[];
  optionTaken: Course | null;

  constructor(
    name: string,
    code: number,
    department: Department,
    description: string,
    prereqs: Course[] | null = null,
    courseType: CourseType[] | null = null,
    grade: Grade | null = null,
    section: Section | null = null,
    options: Course[],
    optionTaken: Course | null,
  ) {
    super(
      name,
      code,
      department,
      description,
      prereqs,
      courseType,
      grade,
      section,
    );
    this.options = options;
    this.optionTaken = optionTaken;
    if (this.optionTaken != null) {
      this.optionTaken.section = section;
    }
  }

  get section(): Section | null {
    if (this.optionTaken == null) return null;

    return this.optionTaken.section;
  }

  // Updates both what course option was taken and the section information of that course
  set section(input: Section | null) {
    if (input == null) this.optionTaken = null;
    else {
      // If section input corresponds to a valid option
      if (
        this.options.find((option) => {
          return option.equals(input.course);
        })
      ) {
        this.optionTaken = input.course;
      } else {
        throw new Error(
          "Section added to CatagoryCourse not from a course that fufills the catagory",
        );
      }
    }
  }
}

export enum Department {
  CS = "CS",
  MATH = "MATH",
  BIOL = "BIOL",
  CHE = "CHE",
  ECE = "ECE",
  HIST = "HIST",
  ENGL = "ENGL",
  POLS = "POLS",
  BA = "BA",
  PHIL = "PHIL",
}

export enum CourseType {
  LAB = "Lab",
  RES = "Res",
}

export enum Grade {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}
