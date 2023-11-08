import React, { Fragment, useMemo } from "react";
import SegmentedProgressBar, {
  segment,
} from "../ProgressBar/segmentedprogressbar.component";
//styles
import styles from "./degreetopbarcontent.module.scss";
import { COURSE_STATUS_COLORS } from "../../../pages/DegreeView/components/Flowchart/flowchart.utils";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";

const DegreeTopBarContent = (): JSX.Element => {
  const $scheduledCourses = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );
  const $degreeHours = useSelector(
    (state: AppState) => state.student.majors[0].hours,
  );

  const toBeScheduledSegment: segment = useMemo(() => {
    // Use reduce to sum up the credits from scheduledCourses
    const totalCredits = $scheduledCourses.reduce(
      (acc, course) => acc + (course.credits ?? 0),
      0,
    );

    return {
      id: "TBS",
      label: "To Be Scheduled",
      color: COURSE_STATUS_COLORS.TOBE_SCHEDULED,
      value: totalCredits,
      tooltip: `${totalCredits} Hours to be scheduled, choose a section(s).`,
    };
  }, [$scheduledCourses]);

  return (
    <Fragment>
      <div className={styles.progressBarContainer}>
        {" "}
        {/** max here should be the total hours needed to graduate */}
        <SegmentedProgressBar
          segments={[toBeScheduledSegment]}
          max={$degreeHours}
        />
      </div>
    </Fragment>
  );
};

export default DegreeTopBarContent;
