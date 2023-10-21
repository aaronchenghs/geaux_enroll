import {
  FRIDAY,
  MONDAY,
  THURSDAY,
  TUESDAY,
  TimeSlot,
  WEDNESDAY,
  WeeklySchedule,
} from "./weeklySchedule";

test("timeslot from three ints", () => {
  const test = new TimeSlot("", 100, 200, 300);

  expect(test.morningBlock).toBe(100);
  expect(test.middayBlock).toBe(200);
  expect(test.nightBlock).toBe(300);
});

test("Get stream of ones - len 0", () => {
  const test = TimeSlot.getOnesStreamOfLength(0);

  expect(test).toBe(0);
});

test("Get stream of ones - len 1", () => {
  const test = TimeSlot.getOnesStreamOfLength(1);

  expect(test).toBe(1);
});

test("Get stream of ones - len 4", () => {
  const test = TimeSlot.getOnesStreamOfLength(4);

  expect(test).toBe(15);
});

test("Get stream of ones - len 32", () => {
  const test = TimeSlot.getOnesStreamOfLength(32);

  expect(test).toBe(4294967295);
});

test("XOR with long streams", () => {
  const x = TimeSlot.getOnesStreamOfLength(32);
  const y = TimeSlot.getOnesStreamOfLength(30);

  const result = x ^ y;
  //11000000000000000000000000000000
  expect(result).toBe(-1073741824);
});

test("XOR with short streams", () => {
  const x = TimeSlot.getOnesStreamOfLength(1);
  const y = TimeSlot.getOnesStreamOfLength(10);

  const result = x ^ y;
  //00000000000000000000001111111110
  expect(result).toBe(1022);
});

test("Brokenup Stream - Start at 0", () => {
  const test = TimeSlot.getBrokenUpStream(0);

  expect(test.morning).toBe(4294967295);
  expect(test.midday).toBe(4294967295);
  expect(test.night).toBe(4294967295);
});

test("Brokenup Stream - Start at 15", () => {
  const test = TimeSlot.getBrokenUpStream(15);

  expect(test.morning).toBe(131071);
  expect(test.midday).toBe(4294967295);
  expect(test.night).toBe(4294967295);
});

test("Brokenup Stream - Start at 16", () => {
  const test = TimeSlot.getBrokenUpStream(16);

  expect(test.morning).toBe(65535);
  expect(test.midday).toBe(4294967295);
  expect(test.night).toBe(4294967295);
});

test("Brokenup Stream - Start at 32", () => {
  const test = TimeSlot.getBrokenUpStream(32);

  expect(test.morning).toBe(0);
  expect(test.midday).toBe(4294967295);
  expect(test.night).toBe(4294967295);
});

test("Brokenup Stream - Start at 48", () => {
  const test = TimeSlot.getBrokenUpStream(48);

  expect(test.morning).toBe(0);
  expect(test.midday).toBe(65535);
  expect(test.night).toBe(4294967295);
});

test("Brokenup Stream - Start at 64", () => {
  const test = TimeSlot.getBrokenUpStream(64);

  expect(test.morning).toBe(0);
  expect(test.midday).toBe(0);
  expect(test.night).toBe(4294967295);
});

test("Brokenup Stream - Start at 80", () => {
  const test = TimeSlot.getBrokenUpStream(80);

  expect(test.morning).toBe(0);
  expect(test.midday).toBe(0);
  expect(test.night).toBe(65535);
});

test("Brokenup Stream - Start at 95", () => {
  const test = TimeSlot.getBrokenUpStream(95);

  expect(test.morning).toBe(0);
  expect(test.midday).toBe(0);
  expect(test.night).toBe(1);
});

test("Brokenup Stream - Start at 96", () => {
  const test = TimeSlot.getBrokenUpStream(96);

  expect(test.morning).toBe(0);
  expect(test.midday).toBe(0);
  expect(test.night).toBe(0);
});

test("TimeSlot - 0:00-24:00", () => {
  const string = "0:0-24:00";
  const test = new TimeSlot(string);

  // 11111111111111111111111111111111
  expect(test.morningBlock).toBe(-1);
  // 11111111111111111111111111111111
  expect(test.middayBlock).toBe(-1);
  // 11111111111111111111111111111111
  expect(test.nightBlock).toBe(-1);
});

test("TimeSlot - 0:00-23:45", () => {
  const string = "0:0-23:45";
  const test = new TimeSlot(string);

  // 11111111111111111111111111111111
  expect(test.morningBlock).toBe(-1);
  // 11111111111111111111111111111111
  expect(test.middayBlock).toBe(-1);
  // 11111111111111111111111111111110
  expect(test.nightBlock).toBe(-2);
});

test("TimeSlot - 4:00-8:00", () => {
  const string = "4:00-8:00";
  const test = new TimeSlot(string);

  // 00000000000000001111111111111111
  expect(test.morningBlock).toBe(65535);
  // 0
  expect(test.middayBlock).toBe(0);
  // 0
  expect(test.nightBlock).toBe(0);
});

test("TimeSlot - 4:00-8:00", () => {
  const string = "4:00-8:00";
  const test = new TimeSlot(string);

  // 00000000000000001111111111111111
  expect(test.morningBlock).toBe(65535);
  // 0
  expect(test.middayBlock).toBe(0);
  // 0
  expect(test.nightBlock).toBe(0);
});

test("TimeSlot - 4:00-8:15", () => {
  const string = "4:00-8:15";
  const test = new TimeSlot(string);

  // 00000000000000001111111111111111
  expect(test.morningBlock).toBe(65535);
  // 10000000000000000000000000000000
  expect(test.middayBlock).toBe(-2147483648);
  // 0
  expect(test.nightBlock).toBe(0);
});

test("TimeSlot - 3:00-4:30", () => {
  const string = "15:00-16:30";
  const test = new TimeSlot(string);

  expect(test.morningBlock).toBe(0);
  expect(test.middayBlock).toBe(15);
  expect(test.nightBlock).toBe(-1073741824);
});

test("Collides With - Collides Morning", () => {
  const string1 = "4:00-5:30";
  const string2 = "5:00-6:30";

  const test1 = new TimeSlot(string1);
  const test2 = new TimeSlot(string2);

  expect(test1.collidesWith(test2)).toBe(true);
});

test("Collides With - Doesn't Collide Morning", () => {
  const string1 = "4:00-5:30";
  const string2 = "5:30-6:30";

  const test1 = new TimeSlot(string1);
  const test2 = new TimeSlot(string2);

  expect(test1.collidesWith(test2)).toBe(false);
});

test("Collides With - Collides Midday", () => {
  const string1 = "8:00-10:15";
  const string2 = "9:45-10:15";

  const test1 = new TimeSlot(string1);
  const test2 = new TimeSlot(string2);

  expect(test1.collidesWith(test2)).toBe(true);
});

test("Collides With - Doesn't Collide Midday", () => {
  const string1 = "8:30-10:30";
  const string2 = "10:45-11:00";

  const test1 = new TimeSlot(string1);
  const test2 = new TimeSlot(string2);

  expect(test1.collidesWith(test2)).toBe(false);
});

test("Collides With - Collides Night", () => {
  const string1 = "16:00-18:15";
  const string2 = "17:00-18:45";

  const test1 = new TimeSlot(string1);
  const test2 = new TimeSlot(string2);

  expect(test1.collidesWith(test2)).toBe(true);
});

test("Collides With - Doesn't Collide Night", () => {
  const string1 = "16:00-16:30";
  const string2 = "15:00-15:30";

  const test1 = new TimeSlot(string1);
  const test2 = new TimeSlot(string2);

  expect(test1.collidesWith(test2)).toBe(false);
});

test("Union and Disunion", () => {
  const string1 = "1:00-3:00";
  const string2 = "2:30-4:00";

  const string3 = "2:30-3:00";

  const earlyTimeSlot = new TimeSlot(string1);
  const lateTimeSlot = new TimeSlot(string2);

  expect(earlyTimeSlot.collidesWith(lateTimeSlot)).toBeTruthy();

  const disunionTimeSlot = earlyTimeSlot.disunion(lateTimeSlot);

  expect(disunionTimeSlot.collidesWith(lateTimeSlot)).toBeFalsy();
  expect(disunionTimeSlot.collidesWith(earlyTimeSlot)).toBeTruthy();

  const unionTimeSlot = new TimeSlot(string3);
  expect(unionTimeSlot.collidesWith(disunionTimeSlot)).toBeFalsy();
  expect(disunionTimeSlot.collidesWith(unionTimeSlot)).toBeFalsy();
});

test("Weekly Schedule Creation", () => {
  const string1 = "12:00-13:30";

  const timeslot = new TimeSlot(string1);

  const weeklySchedule = new WeeklySchedule();

  weeklySchedule.addTimeSlot(MONDAY, timeslot);
  weeklySchedule.addTimeSlot(WEDNESDAY, timeslot);
  weeklySchedule.addTimeSlot(FRIDAY, timeslot);

  expect(weeklySchedule.days[0].collidesWith(timeslot)).toBeTruthy();
  expect(weeklySchedule.days[1]).toBeUndefined;
  expect(weeklySchedule.days[2].collidesWith(timeslot)).toBeTruthy();
  expect(weeklySchedule.days[3]).toBeUndefined;
  expect(weeklySchedule.days[4].collidesWith(timeslot)).toBeTruthy();
  expect(weeklySchedule.days[5]).toBeUndefined;
  expect(weeklySchedule.days[6]).toBeUndefined;
});

test("Union of Schedules", () => {
  const string1 = "12:00-13:30";

  const timeslot = new TimeSlot(string1);

  const noonSchedule = new WeeklySchedule();

  noonSchedule.addTimeSlot(MONDAY, timeslot);
  noonSchedule.addTimeSlot(WEDNESDAY, timeslot);
  noonSchedule.addTimeSlot(THURSDAY, timeslot);
  noonSchedule.addTimeSlot(FRIDAY, timeslot);

  const string2 = "16:00-17:30";
  const timeslot2 = new TimeSlot(string2);

  const nightSchedule = new WeeklySchedule();

  nightSchedule.addTimeSlot(MONDAY, timeslot2);
  nightSchedule.addTimeSlot(TUESDAY, timeslot2);
  nightSchedule.addTimeSlot(WEDNESDAY, timeslot2);
  nightSchedule.addTimeSlot(FRIDAY, timeslot2);

  const unionSchedule = WeeklySchedule.union(noonSchedule, nightSchedule);

  expect(unionSchedule.days[0].collidesWith(timeslot)).toBeTruthy();
  expect(unionSchedule.days[0].collidesWith(timeslot2)).toBeTruthy();

  expect(unionSchedule.days[1].collidesWith(timeslot)).toBeFalsy();
  expect(unionSchedule.days[1].collidesWith(timeslot2)).toBeTruthy();

  expect(unionSchedule.days[2].collidesWith(timeslot)).toBeTruthy();
  expect(unionSchedule.days[2].collidesWith(timeslot2)).toBeTruthy();

  expect(unionSchedule.days[3].collidesWith(timeslot)).toBeTruthy();
  expect(unionSchedule.days[3].collidesWith(timeslot2)).toBeFalsy();

  expect(unionSchedule.days[4].collidesWith(timeslot)).toBeTruthy();
  expect(unionSchedule.days[4].collidesWith(timeslot2)).toBeTruthy();

  expect(unionSchedule.days[5]).toBeUndefined;
  expect(unionSchedule.days[6]).toBeUndefined;
});
