import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { setSelectedCourseNode } from "../../../../store/Degree/degree-slice";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./degreemodal.module.scss";
import { CategoryCourse, Course } from "../../../../models/course";

export type ModalProps = {
  openCondition: boolean;
};

const CourseModal = ({ openCondition }: ModalProps): JSX.Element => {
  const $view = useSelector((state: AppState) => state.app.view);
  const $selectedCourseNode = useSelector(
    (state: AppState) => state.degree.selectedCourseNode,
  );

  const [chosenOption, setChosenOption] = useState<Course | null>(null);

  const isCategory = $selectedCourseNode instanceof CategoryCourse;
  const dispatch = useDispatch();

  const handleClose = (): void => {
    dispatch(setSelectedCourseNode(null));
  };

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
              <div className={styles.selectOptionsContainer}>
                <div className={styles.filtersContainer}></div>
                <div className={styles.optionsContainer}>
                  {$selectedCourseNode.options.map((option) => {
                    return (
                      <div
                        className={styles.optionBox}
                        key={option.name}
                        onClick={(): void => {
                          setChosenOption(option);
                        }}
                      >
                        {option.courseAbreviation + ": " + option.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Modal.Body>
          )}
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            disabled={!chosenOption}
          >
            Schedule
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CourseModal;
