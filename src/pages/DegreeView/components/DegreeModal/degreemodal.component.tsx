import React, { useEffect, useMemo, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { setSelectedCourseNode } from "../../../../store/Degree/degree-slice";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./degreemodal.module.scss";
import { CategoryCourse, Course, Department } from "../../../../models/course";
import {
  addCourseToSchedule,
  removeCourseFromSchedule,
} from "../../../../store/Semester/semester-slice";
import { getCourseBorderColor } from "../Flowchart/CourseNode/nodeUtils";
import { COURSE_STATUS_COLORS } from "../Flowchart/flowchart.utils";
import ToolTip from "../../../../components/ToolTip/ToolTip.component";

export type ModalProps = {
  openCondition: boolean;
};

const CourseModal = ({ openCondition }: ModalProps): JSX.Element => {
  const dispatch = useDispatch();

  const $view = useSelector((state: AppState) => state.app.view);
  const $coursesToSchedule = useSelector(
    (state: AppState) => state.semester.coursesToSchedule,
  );
  const $selectedCourseNode = useSelector(
    (state: AppState) => state.degree.selectedCourseNode,
  );
  const $completedCourses = useSelector(
    (state: AppState) => state.student.completedCourses,
  );

  const [chosenOption, setChosenOption] = useState<Course | null>(null);
  const [selectedCodeRange, setSelectedCodeRange] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);
  const [selectedDepartments, setSelectedDepartments] = useState<Department[]>(
    Object.values(Department),
  );

  const isCategory = $selectedCourseNode instanceof CategoryCourse;

  // This is an outdated memo that only works for core courses
  const courseIsRegistered = useMemo(() => {
    return (
      $selectedCourseNode &&
      !$coursesToSchedule.some((course) => course.equals($selectedCourseNode))
    );
  }, [$selectedCourseNode, $coursesToSchedule]);

  const requirementsMet = useMemo(() => {
    if (!$selectedCourseNode) return false;

    return getCourseBorderColor($selectedCourseNode!) ===
      COURSE_STATUS_COLORS.CANNOT_SCHEDULE
      ? false
      : true;
  }, [$completedCourses, $selectedCourseNode]);

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

  const addButtonDisabled = isCategory && !chosenOption;
  const renderCloseButton = (
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  );

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null,
  );

  const renderCannotScheduleButton = (
    <div
      onMouseOver={(e: React.MouseEvent<HTMLDivElement>): void => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipPos({ x: rect.x, y: rect.bottom });
        setTooltipVisible(true);
      }}
      onMouseOut={(): void => setTooltipVisible(false)}
    >
      <Button variant="secondary" onClick={handleAdd} disabled>
        Cannot Schedule
      </Button>
      <ToolTip
        content="Requirements not met"
        position={tooltipPos || { x: 0, y: 0 }}
        isVisible={tooltipVisible}
      />
    </div>
  );

  const renderScheduleButton = (
    <Button variant="primary" onClick={handleAdd} disabled={addButtonDisabled}>
      Schedule
    </Button>
  );

  const renderRemoveButton = (
    <Button
      variant="danger"
      onClick={handleRemove}
      disabled={addButtonDisabled}
    >
      Remove
    </Button>
  );

  return (
    <>
      <Modal show={openCondition} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {$selectedCourseNode?.name}
            <div className="text-muted small">
              Hours:{" "}
              {$selectedCourseNode?.credits === -1
                ? "---"
                : $selectedCourseNode?.credits}
            </div>
          </Modal.Title>
        </Modal.Header>
        <div className={styles.mainContent}>
          <Modal.Body>{$selectedCourseNode?.description}</Modal.Body>
          {isCategory && (
            <Modal.Body>
              <strong>Select a Course</strong>
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
            </Modal.Body>
          )}
        </div>
        <Modal.Footer>
          {renderCloseButton}
          {!requirementsMet
            ? renderCannotScheduleButton
            : // TODO: account for category courses
            courseIsRegistered
            ? renderScheduleButton
            : renderRemoveButton}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CourseModal;
