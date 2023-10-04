import React, { Fragment } from "react";
import TopBar from "./components/TopBar/topbar.component";
import { CourseList } from "./components/CourseList/course-list.component";

const SemesterView = (): JSX.Element => {
  return (
    <Fragment>
      <TopBar />
      <CourseList></CourseList>
    </Fragment>
  );
};
export default SemesterView;
