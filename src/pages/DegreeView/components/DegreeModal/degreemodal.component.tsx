import React, { useMemo, useState } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { setSelectedCourseNode } from "../../../../store/Degree/degree-slice";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./degreemodal.module.scss";
import {
  CategoryCourse,
  CoreCourse,
  Course,
  Department,
} from "../../../../models/course";
import {
  addCourseToSchedule,
  removeCourseFromSchedule,
} from "../../../../store/Semester/semester-slice";
import { getCourseBorderColor } from "../Flowchart/CourseNode/nodeUtils";
import { COURSE_STATUS_COLORS } from "../Flowchart/flowchart.utils";
import { dropCourse } from "../../../../store/Student/slice";

export type ModalProps = {
  openCondition: boolean;
};

const CourseModal = ({ openCondition }: ModalProps): JSX.Element => {
  const dispatch = useDispatch();

  const $coursesToSchedule = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );
  const $scheduledSections = useSelector(
    (state: AppState) => state.semester.scheduledSections,
  );
  const $selectedCourseNode = useSelector(
    (state: AppState) => state.degree.selectedCourseNode,
  );
  const $completedCourses = useSelector(
    (state: AppState) => state.student.scheduledCourses,
  );
  const $hoursCanSchedule = useSelector(
    (state: AppState) => state.student.hoursCanSchedule,
  );
  const $force = useSelector((state: AppState) => state.app.forceRerender);

  const [chosenOption, setChosenOption] = useState<Course | null>(null);
  const [selectedCodeRange, setSelectedCodeRange] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);
  const [selectedDepartments, setSelectedDepartments] = useState<Department[]>(
    Object.values(Department),
  );

  const isCategory = $selectedCourseNode instanceof CategoryCourse;

  const noSpaceAvailableForThisCourse = useMemo(() => {
    if (!$selectedCourseNode) return false;

    const scheduledTotalCredits = $scheduledSections
      .filter((section) => !section.course.grade)
      .reduce((acc, section) => acc + (section.course.credits ?? 0), 0);

    const sectionsScheduledTotalCredits = $coursesToSchedule.reduce(
      (acc, course) => acc + (course.credits ?? 0),
      0,
    );

    const reducedHoursCanSchedule =
      $hoursCanSchedule - sectionsScheduledTotalCredits - scheduledTotalCredits;

    return !(reducedHoursCanSchedule >= $selectedCourseNode.credits);
  }, [$selectedCourseNode, $scheduledSections, $coursesToSchedule, $force]);
  // This is an outdated memo that only works for core courses

  const relevantCodeRanges = isCategory
    ? Array.from(
        new Set(
          $selectedCourseNode.options.map((option) =>
            Math.floor(option.code / 1000),
          ),
        ),
      ).sort((a, b) => a - b)
    : [];
  const relevantDepartments = isCategory
    ? Array.from(
        new Set($selectedCourseNode.options.map((option) => option.department)),
      ).sort((a, b) => a.localeCompare(b))
    : [];

  const handleClose = (): void => {
    setChosenOption(null);
    dispatch(setSelectedCourseNode(null));
  };

  const handleAdd = (): void => {
    if (!$selectedCourseNode) return;

    dispatch(addCourseToSchedule($selectedCourseNode));
  };
  const handleRemove = (): void => {
    if (!$selectedCourseNode) return;

    dispatch(
      removeCourseFromSchedule(
        $selectedCourseNode.courseAbreviation + $selectedCourseNode.code,
      ),
    );
  };
  const handleDrop = (): void => {
    if (!$selectedCourseNode) return;

    dispatch(dropCourse($selectedCourseNode));
  };

  const toggleCodeRange = (codeStart: number): void => {
    setSelectedCodeRange((prev) => {
      if (prev.includes(codeStart)) {
        return prev.filter((code) => code !== codeStart);
      }
      return [...prev, codeStart];
    });
  };

  const toggleDepartment = (dept: Department): void => {
    setSelectedDepartments((prev) => {
      if (prev.includes(dept)) {
        return prev.filter((d) => d !== dept);
      }
      return [...prev, dept];
    });
  };

  const sortedOptions = isCategory
    ? $selectedCourseNode.options.slice().sort((a, b) => {
        // First, compare by abbreviation.
        const abbreviationComparison = a.courseAbreviation.localeCompare(
          b.courseAbreviation,
        );
        if (abbreviationComparison !== 0) return abbreviationComparison;

        // If abbreviations are equal, compare by code.
        return a.code - b.code;
      })
    : [];

  const renderCloseButton = (
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  );

  const renderCannotScheduleButton = (
    <OverlayTrigger
      key="cannotScheduleTooltip"
      placement="bottom"
      overlay={
        <Tooltip id={`tooltip-cannot-schedule`}>
          {noSpaceAvailableForThisCourse
            ? "Insufficient Scheduling Hours Remaining"
            : "Requirements Not Met"}
        </Tooltip>
      }
    >
      <Button variant="secondary" className={styles.disabledButton}>
        Cannot Schedule
      </Button>
    </OverlayTrigger>
  );

  const renderScheduleButton = (
    <Button variant="primary" onClick={handleAdd}>
      Schedule
    </Button>
  );

  const renderRemoveButton = (
    <Button
      variant="danger"
      onClick={handleRemove}
      disabled={
        $selectedCourseNode
          ? $scheduledSections.some((section) =>
              section.course.equals($selectedCourseNode),
            )
          : false
      }
    >
      Remove
    </Button>
  );

  const renderDropButton = (
    <Button variant="danger" onClick={handleDrop}>
      Drop
    </Button>
  );

  const buttonToRender = useMemo(() => {
    if (!$selectedCourseNode) return <></>;

    const borderColor = getCourseBorderColor($selectedCourseNode);

    switch (borderColor) {
      case COURSE_STATUS_COLORS.CAN_SCHEDULE:
        return noSpaceAvailableForThisCourse
          ? renderCannotScheduleButton
          : renderScheduleButton;
      case COURSE_STATUS_COLORS.CANNOT_SCHEDULE:
        return renderCannotScheduleButton;
      case COURSE_STATUS_COLORS.TO_BE_SCHEDULED:
        return renderRemoveButton;
      case COURSE_STATUS_COLORS.IN_PROGRESS:
        return renderDropButton;
      default:
        return <></>;
    }
  }, [
    $selectedCourseNode,
    $selectedCourseNode,
    $coursesToSchedule,
    $completedCourses,
    $force,
  ]);

  return (
    <>
      <Modal
        show={openCondition}
        onHide={handleClose}
        dialogClassName={styles.modalDialogCustom}
        contentClassName={styles.modalContentCustom}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {$selectedCourseNode?.name}
            <div className="text-muted small">
              Hours:{" "}
              {$selectedCourseNode?.credits === -1
                ? chosenOption
                  ? chosenOption.credits
                  : "---"
                : $selectedCourseNode?.credits}
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className={styles.mainContent}>
            <div className={styles.descriptionContainer}>
              {$selectedCourseNode instanceof CoreCourse && (
                <strong style={{ color: "gray" }}>*C or above to pass</strong>
              )}
              {chosenOption
                ? chosenOption.description
                : $selectedCourseNode?.description}
            </div>

            {isCategory && (
              <div className={styles.categoryOptionsContainer}>
                <strong>View Course Selections Information</strong>
                <hr className={styles.divider} />{" "}
                <div className={styles.filtersContainer}>
                  <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Code Range:</label>
                    {relevantCodeRanges.map((range) => (
                      <label key={range} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={selectedCodeRange.includes(range)}
                          onChange={(): void => toggleCodeRange(range)}
                        />
                        {range}+++
                      </label>
                    ))}
                  </div>

                  <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Department:</label>
                    {relevantDepartments.map((dept) => (
                      <label key={dept} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={selectedDepartments.includes(dept)}
                          onChange={(): void => toggleDepartment(dept)}
                        />
                        {dept}
                      </label>
                    ))}
                  </div>
                </div>
                <div className={styles.selectOptionsContainer}>
                  <div className={styles.optionsContainer}>
                    {sortedOptions
                      .filter((option) =>
                        selectedCodeRange.includes(
                          Math.floor(option.code / 1000),
                        ),
                      )
                      .filter((option) =>
                        selectedDepartments.includes(option.department),
                      )
                      .map((option) => {
                        return (
                          <button
                            className={`${styles.optionBox} ${
                              chosenOption?.equals(option) ? styles.active : ""
                            }`}
                            key={option.name}
                            onClick={(): void => {
                              chosenOption?.equals(option)
                                ? setChosenOption(null)
                                : setChosenOption(option);
                            }}
                          >
                            {option.courseAbreviation + ": " + option.name}
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>

        <Modal.Footer>
          {renderCloseButton}
          {$selectedCourseNode &&
          getCourseBorderColor($selectedCourseNode) !==
            COURSE_STATUS_COLORS.COMPLETED ? (
            buttonToRender
          ) : (
            <>
              <div className={styles.gradeContainer}>Grade: A</div>
              <div className={styles.gradeContainer}>
                Quality Points:{" "}
                {$selectedCourseNode ? $selectedCourseNode?.credits * 4 : 0}
              </div>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CourseModal;
