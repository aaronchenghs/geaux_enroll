// This service exists to proxy a database that takes in courses and returns what the sections are for this year

import { CategoryCourse, Course } from "../../models/course";
import {
  Buildings,
  CourseLocation,
  Instructor,
  Section,
  Session,
} from "../../models/section";
import { Day, TimeSlot, WeeklySchedule } from "../../models/weeklySchedule";

export function getCurrentSections(course: Course): Section[] {
  // Seed randomness with the course name, so sections are always the same
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const seedrandom = require("seedrandom");
  const rng = seedrandom(course.courseAbreviation);

  if (course instanceof CategoryCourse)
    throw new Error("Catagory Courses don't have sections...");

  const numSections = Math.floor((rng() / 2) * 10);

  const currentSemester = Session.FALL;

  const output = [];
  for (let i = 0; i < numSections; i++) {
    output.push(genSection(course, currentSemester, i, rng));
  }

  return output;
}

function genSection(
  course: Course,
  currentSemester: Session,
  index: number,
  rng: () => number,
): Section {
  const instructor: Instructor = instructorList[Math.floor((rng() / 2) * 10)];
  const enrollmentLimit = 100;

  let enrollmentCount: number;
  // 10% chance it is full
  if (rng() > 0.1) {
    enrollmentCount = Math.floor(enrollmentLimit * rng());
  } else {
    enrollmentCount = enrollmentLimit;
  }

  const weeklySchedule = genWeeklySchedule(rng);
  const location: CourseLocation = locations[Math.floor(rng() * 10)];
  const specialEnrollment = undefined;

  return new Section(
    course,
    index,
    instructor,
    currentSemester,
    enrollmentCount,
    enrollmentLimit,
    weeklySchedule,
    location,
    specialEnrollment,
  );
}
// I hate this, enums should be easy to convert to a number :(
const daysInList = [
  Day.MONDAY,
  Day.TUESDAY,
  Day.WEDNESDAY,
  Day.THURSDAY,
  Day.FRIDAY,
  Day.SATURDAY,
  Day.SUNDAY,
];

function genWeeklySchedule(rng: () => number): WeeklySchedule {
  const typeOfClass = Math.floor(rng() * 3);

  const output = new WeeklySchedule();

  // Single day but long
  if (typeOfClass == 0) {
    const dayOfWeek = Math.floor(rng() * 7);

    const startTime = Math.floor(rng() * 10) + 7;
    const endTime = startTime + 3;

    output.addTimeSlot(
      daysInList[dayOfWeek],
      new TimeSlot(startTime + ":00-" + endTime + ":00"),
    );
  }
  // Mon Tues Wed for 1 hr
  else if (typeOfClass == 1) {
    const startTime = Math.floor(rng() * 10) + 7;
    const endTime = startTime + 1;

    const timeslot = new TimeSlot(startTime + ":00-" + endTime + ":00");

    output.addTimeSlot(Day.MONDAY, timeslot);
    output.addTimeSlot(Day.WEDNESDAY, timeslot);
    output.addTimeSlot(Day.FRIDAY, timeslot);
  }
  // Tues Thurs
  else {
    const startTime = Math.floor(rng() * 10) + 7;
    const endTime = startTime + 1;

    const timeslot = new TimeSlot(startTime + ":00-" + endTime + ":30");

    output.addTimeSlot(Day.TUESDAY, timeslot);
    output.addTimeSlot(Day.THURSDAY, timeslot);
  }

  return output;
}

// 5 possible "instructors"
const instructorList: Instructor[] = [
  {
    id: "1",
    email: "pfranz@geauxenroll.com",
    firstName: "Peter",
    lastName: "Franz",
  },
  {
    id: "2",
    email: "acheng@geauxenroll.com",
    firstName: "Aaron",
    lastName: "Cheng",
  },
  {
    id: "3",
    email: "aschulte@geauxenroll.com",
    firstName: "Adam",
    lastName: "Schulte",
  },
  {
    id: "4",
    email: "cpeytavin@geauxenroll.com",
    firstName: "Christian",
    lastName: "Peytavin",
  },
  {
    id: "5",
    email: "aweb@geauxenroll.com",
    firstName: "Andrew",
    lastName: "Webb",
  },
];

// 10 possible rooms
const locations: CourseLocation[] = [
  {
    building: Buildings.PFT,
    roomNumber: "1002",
  },
  {
    building: Buildings.PFT,
    roomNumber: "1334",
  },
  {
    building: Buildings.PFT,
    roomNumber: "1001",
  },
  {
    building: Buildings.PFT,
    roomNumber: "2002",
  },
  {
    building: Buildings.PFT,
    roomNumber: "4012",
  },
  {
    building: Buildings.ALLEN,
    roomNumber: "3251",
  },
  {
    building: Buildings.BAND,
    roomNumber: "134",
  },
  {
    building: Buildings.BEC,
    roomNumber: "10",
  },
  {
    building: Buildings.LOCKETT,
    roomNumber: "2001",
  },
  {
    building: Buildings.MUSIC,
    roomNumber: "230",
  },
];
