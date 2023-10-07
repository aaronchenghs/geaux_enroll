import {
  CatagoryCourse,
  CoreCourse,
  Course,
  CourseFactory,
  CourseType,
  Department,
  Grade,
} from "./course";

test("Create Course Object", () => {
  const test = new Course(
    "Intro to CS for Majors",
    1350,
    Department.CS,
    "Fundamentals of algorithm development and OO Programming",
    [],
    [],
    Grade.D,
  );

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
  const test = new CoreCourse(
    "Intro to CS for Majors",
    1350,
    Department.CS,
    "Fundamentals of algorithm development and OO Programming",
    [],
    [],
    Grade.D,
  );

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
    new Course(
      "Intro to CS for Majors",
      1350,
      Department.CS,
      "Fundamentals of algorithm development and OO Programming",
      [],
      [],
      Grade.D,
    ),
    new Course(
      "Music Appreciation",
      2233,
      Department.PHIL,
      "Music through the ages",
      [],
      [],
      Grade.A,
    ),
    new CoreCourse(
      "Finance For Home",
      4563,
      Department.MATH,
      "Make money make goods",
      [],
      [],
      Grade.C,
    ),
  ];

  const test = new CatagoryCourse(
    "Advanced Elective",
    3333,
    Department.CS,
    "Choose one Advanced Elective",
    [],
    [],
    Grade.D,
    null,
    options,
    null,
  );

  expect(test.code).toBe(3333);
  expect(test.courseAbreviation).toBe("CS 3333");
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
