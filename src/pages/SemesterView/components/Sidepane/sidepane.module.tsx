import { useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { CourseList } from "./CourseList/course-list.component";
import { SectionList } from "./SectionList/section-list.component";
import { CategoryCourse } from "../../../../models/course";
import { OptionList } from "./OptionsList/options-list.component";

const Sidepane = (): JSX.Element => {
  const selected = useSelector(
    (state: AppState) => state.semester.selectedProps,
  );

  if (selected.course == null) {
    return <CourseList></CourseList>;
  } else {
    if (selected.course instanceof CategoryCourse) {
      return <OptionList></OptionList>;
    } else {
      return <SectionList></SectionList>;
    }
  }
};

export default Sidepane;
