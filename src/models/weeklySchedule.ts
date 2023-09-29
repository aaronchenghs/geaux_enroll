export enum Day {
  MONDAY = "Mon",
  TUESDAY = "Tues",
  WEDNESDAY = "Wed",
  THURSDAY = "Thur",
  FRIDAY = "Fri",
  SATURDAY = "Sat",
  SUNDAY = "Sun",
}

export class WeeklySchedule {
  public days: TimeSlot[] = Array(7);

  public setDaySchedule(day: Day, schedule: TimeSlot): void {
    this.days[WeeklySchedule._dayIndices.get(day)!] = schedule;
  }

  private static _dayIndices: Map<Day, number> =
    WeeklySchedule.initDayToIndexMap();

  static initDayToIndexMap(): Map<Day, number> {
    const output = new Map<Day, number>();

    output.set(Day.MONDAY, 0);
    output.set(Day.TUESDAY, 1);
    output.set(Day.WEDNESDAY, 2);
    output.set(Day.THURSDAY, 3);
    output.set(Day.FRIDAY, 4);
    output.set(Day.SATURDAY, 5);
    output.set(Day.SUNDAY, 6);

    return output;
  }
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

  union(other: TimeSlot): TimeSlot {
    return new TimeSlot(
      "",
      this.morningBlock | other.morningBlock,
      this.middayBlock | other.middayBlock,
      this.nightBlock | other.nightBlock,
    );
  }

  // This function is the whole reason to do the conversion into ints
  collidesWith(other: TimeSlot): boolean {
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
