import React, { Fragment, useMemo } from "react";
import SegmentedProgressBar, {
  segment,
} from "../ProgressBar/segmentedprogressbar.component";
//styles
import styles from "./degreetopbarcontent.module.scss";
import { COURSE_STATUS_COLORS } from "../../../pages/DegreeView/components/Flowchart/flowchart.utils";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";
import { School } from "@mui/icons-material";

const DegreeTopBarContent = (): JSX.Element => {
  const $force = useSelector((state: AppState) => state.app.forceRerender);
  const $scheduledCourses = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );
  const $hoursCanSchedule = useSelector(
    (state: AppState) => state.student.hoursCanSchedule,
  );
  const $degreeHours = useSelector(
    (state: AppState) => state.student.majors[0].hours,
  );
  const $scheduledSections = useSelector(
    (state: AppState) => state.student.scheduledCourses,
  );
  const $degree = useSelector((state: AppState) => state.student.majors[0]);

  const hoursCanScheduleSegment: segment = useMemo(() => {
    const scheduledTotalCredits = $scheduledSections
      .filter((section) => !section.course.grade)
      .reduce((acc, section) => acc + (section.course.credits ?? 0), 0);

    const sectionsScheduledTotalCredits = $scheduledCourses.reduce(
      (acc, course) => acc + (course.credits ?? 0),
      0,
    );

    const reducedHoursCanSchedule =
      $hoursCanSchedule - sectionsScheduledTotalCredits - scheduledTotalCredits;

    return {
      id: "HCS",
      label: "Hours Can Schedule",
      color: "gray",
      value: reducedHoursCanSchedule,
      tooltip: `${reducedHoursCanSchedule} Credit Hours Available to Schedule`,
    };
  }, [$hoursCanSchedule, $scheduledCourses, $scheduledSections, $force]);

  const toBeScheduledSegment: segment = useMemo(() => {
    // Use reduce to sum up the credits from scheduledCourses
    const totalCredits = $scheduledCourses.reduce(
      (acc, course) => acc + (course.credits ?? 0),
      0,
    );

    return {
      id: "TBS",
      label: "To Be Scheduled",
      color: COURSE_STATUS_COLORS.TO_BE_SCHEDULED,
      value: totalCredits,
      tooltip: `${totalCredits} Hours to be scheduled, choose a section(s).`,
    };
  }, [$scheduledCourses, $force]);

  const inProgressSegment: segment = useMemo(() => {
    // Filter $scheduledSections to include only courses with an undefined 'grade' and sum their credits
    const totalCredits = $scheduledSections
      .filter((section) => !section.course.grade)
      .reduce((acc, section) => acc + (section.course.credits ?? 0), 0);

    return {
      id: "IP",
      label: "In Progress",
      color: COURSE_STATUS_COLORS.IN_PROGRESS,
      value: totalCredits,
      tooltip: `${totalCredits} Hours in progress.`,
    };
  }, [$scheduledSections, $force]); // Dependency should be $scheduledSections

  const completedSegment: segment = useMemo(() => {
    // Use reduce to sum up the credits from scheduledCourses
    const totalCredits = $scheduledSections
      .filter((section) => section.course.grade)
      .reduce((acc, section) => acc + (section.course.credits ?? 0), 0);

    return {
      id: "C",
      label: "Completed Courses",
      color: COURSE_STATUS_COLORS.COMPLETED,
      value: totalCredits,
      tooltip: `${totalCredits} Hours completed.`,
    };
  }, [$scheduledCourses, $force]);

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
              hoursCanScheduleSegment,
            ]}
            max={$degreeHours}
            isBlankTooltipEnabled={true}
          />
          <School className={styles.schoolIcon} />
        </div>
      </div>
    </Fragment>
  );
};

export default DegreeTopBarContent;
