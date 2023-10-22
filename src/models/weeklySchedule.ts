import { Color } from "react-bootstrap/esm/types";

export enum Days {
  MONDAY = "Mon",
  TUESDAY = "Tues",
  WEDNESDAY = "Wed",
  THURSDAY = "Thur",
  FRIDAY = "Fri",
  SATURDAY = "Sat",
  SUNDAY = "Sun",
}

export interface Day {
  name: string;
  index: number;
  shortName: string;
  color: string;
}
export const MONDAY: Day = {
  name: "Monday",
  index: 0,
  shortName: "M",
  color: "rgb(127,0,0)",
};
export const TUESDAY: Day = {
  name: "Tuesday",
  index: 1,
  shortName: "T",
  color: "rgb(127,127,0)",
};
export const WEDNESDAY: Day = {
  name: "Wednesday",
  index: 2,
  shortName: "W",
  color: "rgb(0,127,0)",
};
export const THURSDAY: Day = {
  name: "Thursday",
  index: 3,
  shortName: "TH",
  color: "rgb(0,127,127)",
};
export const FRIDAY: Day = {
  name: "Friday",
  index: 4,
  shortName: "F",
  color: "rgb(0,0,127)",
};
export const SATURDAY: Day = {
  name: "Saturday",
  index: 5,
  shortName: "S",
  color: "rgb(127,0,127)",
};
export const SUNDAY: Day = {
  name: "Sunday",
  index: 6,
  shortName: "SU",
  color: "rgb(127,127,127)",
};

export const DAYS_IN_LIST = [
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
];

export class WeeklySchedule {
  public days: TimeSlot[] = Array(7);

  // This is the only function that mutates the state of WeeklySchedule
  // Because redux does pointer comparision to determine if state changed
  // Adding timeslots should be done to construct a WeeklySchedule
  // It should not be done to update the state of the app.
  public addTimeSlot(day: Day, schedule: TimeSlot): void {
    this.days[day.index] = schedule;
  }

  static doCollide(a: WeeklySchedule, b: WeeklySchedule): boolean {
    for (let i = 0; i < 7; i++) {
      const collides =
        a.days[i] != null &&
        b.days[i] != null &&
        a.days[i].collidesWith(b.days[i]);

      if (collides) return true;
    }

    return false;
  }

  // Combines A and B in a new WeekelyScheudleObj
  static union(a: WeeklySchedule, b: WeeklySchedule): WeeklySchedule {
    const output = new WeeklySchedule();

    for (let i = 0; i < 7; i++) {
      if (a.days[i] && b.days[i]) {
        output.days[i] = a.days[i].union(b.days[i]);
      } else if (a.days[i]) {
        output.days[i] = a.days[i].clone();
      } else if (b.days[i]) {
        output.days[i] = b.days[i].clone();
      }
    }

    return output;
  }

  // Removes B from A, returns new WeeklySchedule Obj
  static disunion(a: WeeklySchedule, b: WeeklySchedule): WeeklySchedule {
    const output = new WeeklySchedule();

    for (let i = 0; i < 7; i++) {
      if (a.days[i] && b.days[i]) {
        output.days[i] = a.days[i].disunion(b.days[i]);
      } else if (a.days[i]) {
        output.days[i] = a.days[i].clone();
      }
    }

    return output;
  }

  // private static _dayIndices: Map<Days, number> =
  //   WeeklySchedule.initDayToIndexMap();

  // static initDayToIndexMap(): Map<Days, number> {
  //   const output = new Map<Days, number>();

  //   output.set(Days.MONDAY, 0);
  //   output.set(Days.TUESDAY, 1);
  //   output.set(Days.WEDNESDAY, 2);
  //   output.set(Days.THURSDAY, 3);
  //   output.set(Days.FRIDAY, 4);
  //   output.set(Days.SATURDAY, 5);
  //   output.set(Days.SUNDAY, 6);

  //   return output;
  // }
}

// Non-Mutable class, dont modify it after creation because who knows where it is referenced
export class TimeSlot {
  // Number type is a 64 bit floating point number
  // However, when doing bitwise comparison it is converted to a 32 bit number
  // Being fancy here because I am expecting to do a ton of comparisons to see if two timeslots confilict or not

  // I want to represent the day in 15 min increments so 24 * 4 = 96 bits I want therfore I want three numbers (96 / 32)

  morningBlock = 0; //12:00am-8:00am
  middayBlock = 0; //8:00am - 4:00pm
  nightBlock = 0; //4:00pm - 12:00am

  // Input time in 24 hour notation with "-" between
  // %d:%d-%d:%d
  constructor(
    time: string,
    morningBlock: number | null = null,
    middayBlock: number | null = null,
    nightBlock: number | null = null,
  ) {
    if (morningBlock != null && middayBlock != null && nightBlock != null) {
      this.morningBlock = morningBlock;
      this.middayBlock = middayBlock;
      this.nightBlock = nightBlock;
    } else {
      const temp = time.split("-");

      const start = temp[0].split(":");
      const end = temp[1].split(":");

      const startHour = parseInt(start[0]);
      const startMin = parseInt(start[1]);

      const endHour = parseInt(end[0]);
      const endMin = parseInt(end[1]);

      // Convert to an index 0-96

      const startIndex = startHour * 4 + Math.floor(startMin / 15);
      const endIndex = endHour * 4 + Math.floor(endMin / 15);

      const startBitStream = TimeSlot.getBrokenUpStream(startIndex);
      const endBitStream = TimeSlot.getBrokenUpStream(endIndex);

      this.morningBlock = startBitStream.morning ^ endBitStream.morning;
      this.middayBlock = startBitStream.midday ^ endBitStream.midday;
      this.nightBlock = startBitStream.night ^ endBitStream.night;
    }
  }

  clone(): TimeSlot {
    return new TimeSlot(
      "",
      this.morningBlock,
      this.middayBlock,
      this.nightBlock,
    );
  }

  union(other: TimeSlot): TimeSlot {
    return new TimeSlot(
      "",
      this.morningBlock | other.morningBlock,
      this.middayBlock | other.middayBlock,
      this.nightBlock | other.nightBlock,
    );
  }

  disunion(other: TimeSlot): TimeSlot {
    return new TimeSlot(
      "",
      (this.morningBlock & other.morningBlock) ^ this.morningBlock,
      (this.middayBlock & other.middayBlock) ^ this.middayBlock,
      (this.nightBlock & other.nightBlock) ^ this.nightBlock,
    );
  }

  // This function is the whole reason to do the conversion into ints
  collidesWith(other: TimeSlot | null): boolean {
    if (other == null) return false;
    return (
      (this.morningBlock & other.morningBlock) +
        (this.middayBlock & other.middayBlock) +
        (this.nightBlock & other.nightBlock) !=
      0
    );
  }

  static ALL_ONES = TimeSlot.getOnesStreamOfLength(32);

  // I hate this function but it is needed because there are no longs so i need to break my bits down into three ints
  static getBrokenUpStream(indexToStartOnes: number): {
    morning: number;
    midday: number;
    night: number;
  } {
    const stream = { morning: 0, midday: 0, night: 0 };

    // Starts in morning
    if (indexToStartOnes < 32) {
      const bitsToChange = 32 - indexToStartOnes;

      stream.morning = TimeSlot.getOnesStreamOfLength(bitsToChange);
      stream.midday = TimeSlot.ALL_ONES;
      stream.night = TimeSlot.ALL_ONES;
    }
    // Starts in midday
    else if (indexToStartOnes >= 32 && indexToStartOnes < 64) {
      const bitsToChange = 32 - (indexToStartOnes - 32);

      stream.morning = 0;
      stream.midday = TimeSlot.getOnesStreamOfLength(bitsToChange);
      stream.night = TimeSlot.ALL_ONES;
    }
    // Starts in evening
    else if (indexToStartOnes >= 64) {
      const bitsToChange = 32 - (indexToStartOnes - 64);

      stream.morning = 0;
      stream.midday = 0;
      stream.night = TimeSlot.getOnesStreamOfLength(bitsToChange);
    }

    return stream;
  }

  static getOnesStreamOfLength(length: number): number {
    return 2 ** length - 1;
  }
}
