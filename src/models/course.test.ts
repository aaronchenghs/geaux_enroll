import {
  CategoryCourse,
  CoreCourse,
  Course,
  CourseFactory,
  CourseType,
  Department,
  Grade,
} from "./course";

test("Create Course Object", () => {
  const test = new Course({
    name: "Intro to CS for Majors",
    code: 1350,
    department: Department.CS,
    description: "Fundamentals of algorithm development and OO Programming",
    prereqs: [],
    courseType: [],
    grade: Grade.D,
  });

  expect(test.code).toBe(1350);
  expect(test.courseAbreviation).toBe("CS 1350");
  expect(test.department).toBe(Department.CS);
  expect(test.section == null).toBe(true);
  expect(test.prereqs).toStrictEqual([]);

  expect(test.arePrereqsMeetBy([])).toBe(true);
  expect(test.hasPrereqs()).toBe(false);
  expect(test.didPass()).toBe(true);
});

test("Create CoreCourse Object", () => {
  const test = new CoreCourse({
    name: "Intro to CS for Majors",
    code: 1350,
    department: Department.CS,
    description: "Fundamentals of algorithm development and OO Programming",
    prereqs: [],
    courseType: [],
    grade: Grade.D,
  });

  expect(test.code).toBe(1350);
  expect(test.courseAbreviation).toBe("CS 1350");
  expect(test.department).toBe(Department.CS);
  expect(test.section == null).toBe(true);
  expect(test.prereqs).toStrictEqual([]);

  expect(test.arePrereqsMeetBy([])).toBe(true);
  expect(test.hasPrereqs()).toBe(false);
  expect(test.didPass()).toBe(false);
});

test("Create CatagoryCourse Object", () => {
  const options = [
    new Course({
      name: "Intro to CS for Majors",
      code: 1350,
      department: Department.CS,
      description: "Fundamentals of algorithm development and OO Programming",
      prereqs: [],
      courseType: [],
      grade: Grade.D,
    }),
    new Course({
      name: "Music Appreciation",
      code: 2233,
      department: Department.PHIL,
      description: "Music through the ages",
      prereqs: [],
      courseType: [],
      grade: Grade.A,
    }),
    new CoreCourse({
      name: "Finance For Home",
      code: 4563,
      department: Department.MATH,
      description: "Make money make goods",
      prereqs: [],
      courseType: [],
      grade: Grade.C,
    }),
  ];

  const test = new CategoryCourse({
    name: "Advanced Elective",
    department: Department.CS,
    description: "Choose one Advanced Elective",
    prereqs: [],
    courseType: [],
    grade: Grade.D,
    section: null,
    options: options,
    optionTaken: null,
  });

  expect(test.code).toBe(3333);
  expect(test.courseAbreviation).toBe("Advanced Elective");
  expect(test.department).toBe(Department.CS);
  expect(test.section == null).toBe(true);
  expect(test.prereqs).toStrictEqual([]);

  expect(test.arePrereqsMeetBy([])).toBe(true);
  expect(test.hasPrereqs()).toBe(false);
  expect(test.didPass()).toBe(true);
});

test("Create Course w/ Factory - Minimal", () => {
  const name = "Intro To CSC";
  const code = 1234;
  const department = Department.CS;

  const factory = new CourseFactory();

  factory.name = name;
  factory.code = code;
  factory.department = department;

  const course = factory.createCourse();

  expect(course.code).toEqual(code);
  expect(course.name).toEqual(name);
  expect(course.department).toEqual(department);
  expect(course.description).toBeNull();
  expect(course.prereqs).toEqual([]);
  expect(course.courseType).toEqual([]);
  expect(course.arePrereqsMeetBy([])).toBeTruthy();
  expect(course.didPass()).toBeFalsy();
});

test("Create Course w/ Factory - Maximal", () => {
  const name = "Intro To CSC";
  const code = 1234;
  const department = Department.CS;

  const factory = new CourseFactory();

  factory.name = name;
  factory.code = code;
  factory.department = department;
  factory.courseType = [CourseType.LAB];
  factory.grade = Grade.A;
  factory.prereqs = null;
  factory.section = null;

  const course = factory.createCourse();

  expect(course.code).toEqual(code);
  expect(course.name).toEqual(name);
  expect(course.department).toEqual(department);
  expect(course.description).toBeNull();
  expect(course.prereqs).toEqual([]);
  expect(course.courseType).toEqual([CourseType.LAB]);
  expect(course.arePrereqsMeetBy([])).toBeTruthy();
  expect(course.didPass()).toBeTruthy();
});
