import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/store";
import { ReactNode } from "react";

// Modular style inshallah
import styles from "./options-list.module.scss";
import { CategoryCourse } from "../../../../../models/course";
import { CourseTile } from "../CourseTile/course-tile.components";
import { Header } from "../Header/header.component";

export const OptionList = (): JSX.Element => {
  const selected: CategoryCourse = useSelector(
    (state: AppState) => state.semester.selectedProps.course! as CategoryCourse,
  );

  const dispatch = useDispatch();

  const renderedCourses: ReactNode[] = selected.options.map(
    (course, index): ReactNode => {
      const orTag = index != 0 ? <p> — OR — </p> : null;
      return (
        <div key={course.name}>
          {orTag}
          <CourseTile key={course.name} course={course}></CourseTile>
        </div>
      );
    },
  );

  const header: JSX.Element = (
    <Header pretitle="Options for:" title={selected.name} />
  );

  return (
    <div className={styles.OptionsList}>
      <div className={styles.center}>
        {header}
        {renderedCourses}
      </div>
    </div>
  );
};
