import { Section } from "./section";

export class Course {
  name: string;

  code: number;
  department: Department;

  description: string | null;
  prereqs: Course[];
  courseType: CourseType[];

  grade: Grade | null;
  private _section: Section | null;

  constructor(
    name: string,
    code: number,
    department: Department,
    description: string | null,
    prereqs: Course[] | null = null,
    courseType: CourseType[] = [],
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
    courseType: CourseType[] = [],
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

export class CourseFactory {
  private _name: string | undefined;

  private _code: number | undefined;
  private _department: Department | undefined;

  private _description: string | null | undefined;
  private _prereqs: Course[] | undefined;
  private _courseType: CourseType[] | undefined;

  private _grade: Grade | null | undefined;
  private _section: Section | null | undefined;

  // Support CoreCourse
  private _isCore: boolean = false;

  // Support CatagoryCourse
  private _options: Course[] | null = null;
  private _optionTaken: Course | null = null;

  createCourse(): Course {
    // Ensure it is a valid course
    if (!this.hasRequiredFields())
      throw Error("Attempted to create course missing key details");
    // Change undefined values into default values
    this.setUndefinedToDefault();

    if (this.isCoreCorse()) {
      return new CoreCourse(
        this._name!,
        this._code!,
        this._department!,
        this._description!,
        this._prereqs!,
        this._courseType!,
        this._grade!,
        this._section!,
      );
    }

    if (this.isCatagoryCorse()) {
      return new CatagoryCourse(
        this._name!,
        this._code!,
        this._department!,
        this._description!,
        this._prereqs!,
        this._courseType!,
        this._grade!,
        this._section!,
        this._options!,
        this._optionTaken!,
      );
    }

    return new Course(
      this._name!,
      this._code!,
      this._department!,
      this._description ?? null,
      this._prereqs,
      this._courseType,
      this._grade,
      this._section,
    );
  }

  private hasRequiredFields(): boolean {
    return (
      this._name != undefined &&
      this._code != undefined &&
      this._department != undefined
    );
  }

  private isCoreCorse(): boolean {
    return this._isCore;
  }

  private isCatagoryCorse(): boolean {
    return this._options != null;
  }

  private setUndefinedToDefault(): void {
    if (this._description == undefined) this._description = null;
    if (this._prereqs == undefined) this._prereqs = [];
    if (this._courseType == undefined) this._courseType = [];
    if (this._grade == undefined) this._grade = null;
    if (this._section == undefined) this._section = null;
  }

  set isCore(isCore: boolean) {
    this._isCore = isCore;
  }

  setOptions(options: Course[], optionTaken: Course | null): void {
    this._options = options;
    this._optionTaken = optionTaken;
  }

  set name(name: string) {
    this._name = name;
  }

  set code(code: number) {
    this._code = code;
  }

  set isCoreCourse(isCore: boolean) {
    this._isCore = isCore;
  }

  set department(dept: Department) {
    this._department = dept;
  }

  set prereqs(prereqs: Course[] | null) {
    if (prereqs != null) this.prereqs = prereqs;
    else prereqs = [];
  }

  set courseType(type: CourseType[] | null) {
    if (type != null) this._courseType = type;
    else this._courseType = [];
  }

  set grade(grade: Grade | null) {
    this._grade = grade;
  }

  set section(section: Section | null) {
    this._section = null;
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
