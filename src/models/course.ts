import { Section } from "./section";

interface CourseParams {
  name: string;
  code: number;
  department: Department;
  description?: string | null;
  prereqs?: Course[] | null;
  courseType?: CourseType[];
  grade?: Grade | null;
  section?: Section | null;
  credits: number;
}
export class Course {
  name: string;
  code: number;
  department: Department;
  description?: string | null;
  prereqs: Course[];
  courseType?: CourseType[];
  grade: Grade | null;
  credits?: number;
  private _section: Section | null;

  constructor(params: CourseParams) {
    this.name = params.name;
    this.code = params.code;
    this.department = params.department;
    this.description = params.description;
    this.prereqs = params.prereqs ?? [];
    this.courseType = params.courseType;
    this.grade = params.grade ?? null;
    this._section = params.section ?? null;
    this.credits = params.credits ?? -1;
  }

  get section(): Section | null {
    return this._section;
  }

  set section(input: Section | null) {
    this._section = input;
  }

  get courseAbreviation(): string {
    return this.department.toUpperCase() + "" + this.code.toString();
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

interface CategoryCourseParams {
  name: string;
  description: string;
  department?: Department;
  prereqs: Course[] | null;
  courseType: CourseType[];
  grade: Grade | null;
  section: Section | null;
  options: Course[];
  optionTaken: Course | null;
}
export class CategoryCourse extends Course {
  options: Course[];
  optionTaken: Course | null;

  constructor(params: CategoryCourseParams) {
    super({
      name: params.name,
      code: -1,
      department: params.department ?? Department.NA,
      description: params.description,
      prereqs: params.prereqs,
      courseType: params.courseType,
      grade: params.grade,
      section: params.section,
      credits: -1,
    });
    this.options = params.options;
    this.optionTaken = params.optionTaken;
    if (this.optionTaken != null && params.section) {
      this.optionTaken.section = params.section;
    }
  }

  get courseAbreviation(): string {
    return this.name;
  }

  get section(): Section | null {
    if (this.optionTaken == null) return null;

    return this.optionTaken.section;
  }

  // Updates both what course option was taken and the section information of that course
  set section(input: Section | null) {
    if (input == null) {
      if (this.optionTaken != null) this.optionTaken!.section = null;
      this.optionTaken = null;
    } else {
      // If section input corresponds to a valid option
      if (
        this.options.find((option) => {
          return option.equals(input.course);
        })
      ) {
        this.optionTaken = input.course;
        this.optionTaken.section = input;
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
  private _credits: number | undefined;

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
      return new CoreCourse({
        name: this._name!,
        code: this._code!,
        department: this._department!,
        description: this._description!,
        prereqs: this._prereqs!,
        courseType: this._courseType!,
        grade: this._grade!,
        section: this._section!,
        credits: this._credits!,
      });
    }

    if (this.isCatagoryCorse()) {
      return new CategoryCourse({
        name: this._name!,
        department: this._department!,
        description: this._description!,
        prereqs: this._prereqs!,
        courseType: this._courseType!,
        grade: this._grade!,
        section: this._section!,
        options: this._options!,
        optionTaken: this._optionTaken!,
      });
    }

    return new Course({
      name: this._name!,
      code: this._code!,
      department: this._department!,
      description: this._description,
      prereqs: this._prereqs,
      courseType: this._courseType,
      grade: this._grade,
      section: this._section,
      credits: this._credits ?? 3,
    });
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
  ART = "ART",
  IE = "IE",
  NA = "",
  ARTH = "ARTH",
  MC = "MC",
  MUS = "MUS",
  EE = "EE",
  ISDS = "ISDS",
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
