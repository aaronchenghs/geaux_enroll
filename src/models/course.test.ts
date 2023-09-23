import { CatagoryCourse, CoreCourse, Course, Department, Grade } from "./course"

test("Create Course Object",()=>{
    let test = new Course("Intro to CS for Majors",1350,Department.CS,
    "Fundamentals of algorithm development and OO Programming", [],null, Grade.D);

    expect(test.code).toBe(1350);
    expect(test.courseAbreviation).toBe("CS 1350");
    expect(test.department).toBe(Department.CS);
    expect(test.section == null).toBe(true);
    expect(test.prereqs).toStrictEqual([]);

    expect(test.arePrereqsMeetBy([])).toBe(true);
    expect(test.hasPrereqs()).toBe(false);
    expect(test.didPass()).toBe(true);
})


test("Create CoreCourse Object",()=>{
    let test = new CoreCourse("Intro to CS for Majors",1350,Department.CS,
    "Fundamentals of algorithm development and OO Programming", [],null, Grade.D);

    expect(test.code).toBe(1350);
    expect(test.courseAbreviation).toBe("CS 1350");
    expect(test.department).toBe(Department.CS);
    expect(test.section == null).toBe(true);
    expect(test.prereqs).toStrictEqual([]);

    expect(test.arePrereqsMeetBy([])).toBe(true);
    expect(test.hasPrereqs()).toBe(false);
    expect(test.didPass()).toBe(false);
})


test("Create CatagoryCourse Object",()=>{
    let options = [new Course("Intro to CS for Majors",1350,Department.CS,
    "Fundamentals of algorithm development and OO Programming", [],null, Grade.D),
     new Course("Music Appreciation",2233,Department.PHIL,
    "Music through the ages", [],null, Grade.A),
    new CoreCourse("Finance For Home",4563,Department.MATH,
    "Make money make goods", [],null, Grade.C)];

    let test = new CatagoryCourse("Advnaced Elective",3333,Department.CS,
    "Choose one Advanced Elective", [] , null, Grade.D,null,options,null);

    expect(test.code).toBe(3333);
    expect(test.courseAbreviation).toBe("CS 3333");
    expect(test.department).toBe(Department.CS);
    expect(test.section == null).toBe(true);
    expect(test.prereqs).toStrictEqual([]);

    expect(test.arePrereqsMeetBy([])).toBe(true);
    expect(test.hasPrereqs()).toBe(false);
    expect(test.didPass()).toBe(true);
})