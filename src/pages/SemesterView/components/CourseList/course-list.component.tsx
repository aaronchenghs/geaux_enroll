import { useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { ReactNode } from "react";
import React from "react";

export const CourseList = (): JSX.Element => {
  const courses = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );

  const renderedCourses: ReactNode[] = courses.map((course): ReactNode => {
    return (
      <React.Fragment key={course.name}>
        <p>{course.name}</p>
      </React.Fragment>
    );
  });

  return (
    <section>
      <h2> Courses </h2>
      {renderedCourses}
    </section>
  );
};
