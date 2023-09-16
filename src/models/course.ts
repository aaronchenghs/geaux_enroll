export interface Course {
  id: string;
  title: string;
  course: CourseAbbreviation;
  creditHours: number;
}

export interface SemesterCourse extends Course {
  section: number;
  instructor: Instructor;

  enrollmentCount: number;
  enrollmentLimit: number;

  timeSlot?: Times;
  location?: CourseLocation;
  specialEnrollment?: SpecialEnrollments;
  courseType?: CourseTypes;
}

export interface DegreeCourse extends Course {
  passWithC: boolean;
}

export interface CompletedCourse extends DegreeCourse {
  grade: Grades;
}

export interface CourseAbbreviation {
  department: Departments;
  courseNumber: string;
}

export interface CourseTimeSlot {
  semester: Sessions;
  days: Weekdays[];
  startTime: Times;
  endTime: Times;
}

export interface Instructor {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface CourseLocation {
  building: Buildings;
  roomNumber: string;
}

// enumerations, some of this is data we would get if we had a backend

export enum Weekdays {
  MONDAY = "Mon",
  TUESDAY = "Tues",
  WEDNESDAY = "Wed",
  THURSDAY = "Thur",
  FRIDAY = "Fri",
  SATURDAY = "Sat",
  SUNDAY = "Sun",
}

export enum Times {
  AM_7 = "7:00 AM",
  AM_7_30 = "7:30 AM",
  AM_8 = "8:00 AM",
  AM_8_30 = "8:30 AM",
  AM_9 = "9:00 AM",
  AM_9_30 = "9:30 AM",
  AM_10 = "10:00 AM",
  AM_10_30 = "10:30 AM",
  AM_11 = "11:00 AM",
  AM_11_30 = "11:30 AM",
  PM_12 = "12:00 PM",
  PM_12_30 = "12:30 PM",
  PM_1 = "1:00 PM",
  PM_1_30 = "1:30 PM",
  PM_2 = "2:00 PM",
  PM_2_30 = "2:30 PM",
  PM_3 = "3:00 PM",
  PM_3_30 = "3:30 PM",
  PM_4 = "4:00 PM",
  PM_4_30 = "4:30 PM",
  PM_5 = "5:00 PM",
  PM_5_30 = "5:30 PM",
  PM_6 = "6:00 PM",
  PM_6_30 = "6:30 PM",
  PM_7 = "7:00 PM",
  PM_7_30 = "7:30 PM",
  PM_8 = "8:00 PM",
  PM_8_30 = "8:30 PM",
  PM_9 = "9:00 PM",
  PM_9_30 = "9:30 PM",
  PM_10 = "10:00 PM",
  PM_10_30 = "10:30 PM",
}

export enum Departments {
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

export enum SpecialEnrollments {
  PERMISSION_OF_DEPARTMENT = "Permission of department",
  CI_WRITTEN_TECH = "CI written tech",
  WEB_BASED = "100% Web-Based",
  HYBRID = "Hybrid",
}

export enum Buildings {
  PFT = "Patrick F. Taylor",
  LOCKETT = "Lockett",
  HIMES = "Himes",
  TUREAUD = "Tureaud",
  WILLIAMS = "Williams",
  WHITE = "White",
  COATES = "Coates",
  MILLER = "Miller",
  WOODIN = "Woodin",
  ALLEN = "Allen",
  MUSIC = "School of Music",
  MDA = "M&DA Building",
  BAND = "Band Hall",
  NICHOLSON = "Nicholson",
  BEC = "Business Education Complex",
}

export enum CourseTypes {
  LAB = "Lab",
  RES = "Res",
}

export enum Sessions {
  FALL = "Fall",
  SPRING = "Spring",
  WINTER = "Winter",
  SUMMER = "Summer",
}

export enum Grades {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}
