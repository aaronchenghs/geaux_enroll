export interface Course {
  title: string;
  course: CourseAbbreviation;
  section: number;
  instructor: Instructor;
  creditHours: number;

  enrollmentCount: number;
  enrollmentLimit: number;

  timeSlot?: CourseTime;
  location?: CourseLocation;
  specialEnrollment?: SpecialEnrollment;
  courseType?: CourseType;
}

export interface CourseAbbreviation {
  department: Departments;
  number: string;
}

export interface TimeSlot {
  semester: Session;
  days: Weekday[];
  startTime: CourseTime;
  endTime: CourseTime;
}

export interface Instructor {
  firstName: string;
  lastName: string;
}

export interface CourseLocation {
  building: Building;
  roomNumber: string;
}

// enumerations, some of this is data we would get if we had a backend

export enum Weekday {
  MONDAY = "Mon",
  TUESDAY = "Tues",
  WEDNESDAY = "Wed",
  THURSDAY = "Thur",
  FRIDAY = "Fri",
  SATURDAY = "Sat",
  SUNDAY = "Sun",
}

export enum CourseTime {
  SEVENAM = "7:00 AM",
  SEVENTHIRTYAM = "7:30 AM",
  EIGHTAM = "8:00 AM",
  EIGHTTHIRTYAM = "8:30 AM",
  NINEAM = "9:00 AM",
  NINETHIRTYAM = "9:30 AM",
  TENAM = "10:00 AM",
  TENTHIRTYAM = "10:30 AM",
  ELEVENAM = "11:00 AM",
  ELEVENTHIRTYAM = "11:30 AM",
  TWELVEPM = "12:00 PM",
  TWELVETHIRTYPM = "12:30 PM",
  ONEPM = "1:00 PM",
  ONETHIRTYPM = "1:30 PM",
  TWOPM = "2:00 PM",
  TWOTHIRTYPM = "2:30 PM",
  THREEPM = "3:00 PM",
  THREETHIRTYPM = "3:30 PM",
  FOURPM = "4:00 PM",
  FOURTHIRTYPM = "4:30 PM",
  FIVEPM = "5:00 PM",
  FIVETHIRTYPM = "5:30 PM",
  SIXPM = "6:00 PM",
  SIXTHIRTYPM = "6:30 PM",
  SEVENPM = "7:00 PM",
  SEVENTHIRTYPM = "7:30 PM",
  EIGHTPM = "8:00 PM",
  EIGHTTHIRTYPM = "8:30 PM",
  NINEPM = "9:00 PM",
  NINETHIRTYPM = "9:30 PM",
  TENPM = "10:00 PM",
  TENTHIRTYPM = "10:30 PM",
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

export enum SpecialEnrollment {
  PERMISSION_OF_DEPARTMENT = "Permission of department",
  CI_WRITTEN_TECH = "CI written tech",
  WEB_BASED = "100% Web-Based",
  HYBRID = "Hybrid",
}

export enum Building {
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

export enum CourseType {
  LAB = "Lab",
  RES = "Res",
}

export enum Session {
  FALL = "Fall",
  SPRING = "Spring",
  WINTER = "Winter",
  SUMMER = "Summer",
}
