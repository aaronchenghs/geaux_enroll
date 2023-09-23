import { Course } from "./course";
import { WeeklySchedule } from "./weeklySchedule";

export class Section{
    // I am okay having a cyclical depedenecy, a "course" belongs to a student, so it needs to be filled in with what section that student takes
    // A section belongs to a course so it can know what course it reps. Therfore,
    // Section foo; foo.course.section == foo or foo.course.section != foo //Both possible ;
    // Second one would happen if the section belonged to a a course, but the student didn't take that section
  
    constructor(
        public course: Course,
        public number: number,
        public instructor : Instructor | undefined,
        public semester : Session, 
        public enrollmentCount : number = 0, 
        public enrollmentLimit: number = Number.MAX_VALUE,
        public schedule: WeeklySchedule,
        public location: CourseLocation | undefined,
        public speciallEnrollment: SpecialEnrollment[] = []
    ){}
  }


export interface Instructor {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

export enum Session {
    FALL = "Fall",
    SPRING = "Spring",
    WINTER = "Winter",
    SUMMER = "Summer",
}

export interface CourseLocation {
    building: Buildings;
    roomNumber: string;
}

export enum SpecialEnrollment {
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