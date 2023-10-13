import { useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { CourseList } from "./CourseList/course-list.component";
import { SectionList } from "./SectionList/section-list.component";

const Sidepane = (): JSX.Element => {
  const selectedCourse = useSelector(
    (state: AppState) => state.semester.selectedCourseProps.course,
  );

  if (selectedCourse == null) {
    return <CourseList></CourseList>;
  } else {
    return <SectionList></SectionList>;
  }
};

export default Sidepane;
