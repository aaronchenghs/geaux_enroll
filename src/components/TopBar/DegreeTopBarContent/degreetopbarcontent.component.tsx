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
  const $inProgressSections = useSelector(
    (state: AppState) => state.semester.scheduledSections,
  );
  const $completedCourses = useSelector(
    (state: AppState) => state.student.completedCourses,
  );
  const $degreeHours = useSelector(
    (state: AppState) => state.student.majors[0].hours,
  );
  const $degree = useSelector((state: AppState) => state.student.majors[0]);

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

  const inProgressSegment: segment = useMemo(() => {
    // Use reduce to sum up the credits from scheduledCourses
    const totalCredits = $inProgressSections
      .map((section) => section.course)
      .reduce((acc, course) => acc + (course.credits ?? 0), 0);

    return {
      id: "IP",
      label: "In Progress",
      color: COURSE_STATUS_COLORS.IN_PROGRESS,
      value: totalCredits,
      tooltip: `${totalCredits} Hours to in progress.`,
    };
  }, [$scheduledCourses]);

  const completedSegment: segment = useMemo(() => {
    // Use reduce to sum up the credits from scheduledCourses
    const totalCredits = $completedCourses.reduce(
      (acc, course) => acc + (course.credits ?? 0),
      0,
    );

    return {
      id: "C",
      label: "Completed Courses",
      color: COURSE_STATUS_COLORS.COMPLETED,
      value: totalCredits,
      tooltip: `${totalCredits} Hours completed.`,
    };
  }, [$scheduledCourses]);

  return (
    <Fragment>
      <div className={styles.parentContainer}>
        <h2 className={styles.semester}>
          <span className={styles.light}>Degree: </span> {$degree.concentration}{" "}
        </h2>
        <div className={styles.progressBarContainer}>
          <SegmentedProgressBar
            segments={[
              completedSegment,
              inProgressSegment,
              toBeScheduledSegment,
            ]}
            max={$degreeHours}
            isBlankTooltipEnabled={true}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default DegreeTopBarContent;
