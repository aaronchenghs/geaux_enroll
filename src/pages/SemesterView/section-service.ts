// This service exists to proxy a database that takes in courses and returns what the sections are for this year

import { CategoryCourse, Course } from "../../models/course";
import {
  Buildings,
  CourseLocation,
  Instructor,
  Section,
  Session,
} from "../../models/section";

import {
  DAYS_IN_LIST,
  FRIDAY,
  MONDAY,
  SATURDAY,
  SUNDAY,
  THURSDAY,
  TUESDAY,
  TimeSlot,
  WEDNESDAY,
  WeeklySchedule,
} from "../../models/weeklySchedule";

export function getCurrentSections(course: Course): Section[] {
  // Seed randomness with the course name, so sections are always the same
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const seedrandom = require("seedrandom");
  const seed = "123";
  const rng = seedrandom(course.courseAbreviation + seed);

  if (course instanceof CategoryCourse)
    throw new Error("Catagory Courses don't have sections...");

  const numSections = Math.floor(rng() * 3) + 1;

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
  const instructor: Instructor = instructorList[Math.floor(rng() * 10)];
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

function genWeeklySchedule(rng: () => number): WeeklySchedule {
  const typeOfClass = Math.floor(rng() * 3);

  const output = new WeeklySchedule();

  // Single day but long
  if (typeOfClass == 0) {
    const dayOfWeek = Math.floor(rng() * 5);

    const startTime = Math.floor(rng() * 10) + 7;
    const endTime = startTime + 3;

    output.addTimeSlot(
      DAYS_IN_LIST[dayOfWeek],
      new TimeSlot(startTime + ":00-" + endTime + ":00"),
    );
  }
  // Mon Tues Wed for 1 hr
  else if (typeOfClass == 1) {
    const startTime = Math.floor(rng() * 10) + 7;
    const endTime = startTime + 1;

    const timeslot = new TimeSlot(startTime + ":00-" + endTime + ":00");

    output.addTimeSlot(MONDAY, timeslot);
    output.addTimeSlot(WEDNESDAY, timeslot);
    output.addTimeSlot(FRIDAY, timeslot);
  }
  // Tues Thurs
  else {
    const startTime = Math.floor(rng() * 10) + 7;
    const endTime = startTime + 1;

    const timeslot = new TimeSlot(startTime + ":00-" + endTime + ":30");

    output.addTimeSlot(TUESDAY, timeslot);
    output.addTimeSlot(THURSDAY, timeslot);
  }

  return output;
}

// 5 possible "instructors"
const instructorList: Instructor[] = [
  {
    id: "1",
    email: "pfranz@geauxenroll.com",
    name: "Peter Franz",
    rating: 3.0,
  },
  {
    id: "2",
    email: "acheng@geauxenroll.com",
    name: "Aaron Cheng",
    rating: 3.5,
  },
  {
    id: "3",
    email: "aschulte@geauxenroll.com",
    name: "Adam Schulte",
    rating: 4.5,
  },
  {
    id: "4",
    email: "cpeytavin@geauxenroll.com",
    name: "Christian Peytavin",
    rating: 4.0,
  },
  {
    id: "5",
    email: "aweb@geauxenroll.com",
    name: "Andrew Webb",
    rating: 5.0,
  },
  {
    id: "6",
    email: "dr.vvenom@malevolentuni.edu",
    name: "Vincent Venom",
    rating: 1.25,
  },
  {
    id: "7",
    email: "dr.ddark@nefariouscollege.edu",
    name: "Damien Dark",
    rating: 2.0,
  },
  {
    id: "8",
    email: "cat@geauxenroll.com",
    name: "A Talking Cat",
    rating: 5.0,
  },
  {
    id: "9",
    email: "prof.bmortem@shadowcollege.edu",
    name: "Ben Bore'em",
    rating: 0.75,
  },
  {
    id: "10",
    name: "Alexander Nox",
    email: "dr.anox@diabolicalu.edu",
    rating: 2.3,
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
    building: Buildings.WILLIAMS,
    roomNumber: "230",
  },
];
