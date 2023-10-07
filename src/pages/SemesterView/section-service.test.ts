import { CourseFactory, Department } from "../../models/course";
import { getCurrentSections } from "./section-service";

test("Test Service returns an array of some sections", () => {
  const name = "In To CSC";
  const code = 123;
  const department = Department.CS;

  const factory = new CourseFactory();

  factory.name = name;
  factory.code = code;
  factory.department = department;

  const course = factory.createCourse();

  const output = getCurrentSections(course);

  expect(output.length > 0).toBeTruthy();
});
