import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/store";
import { setSelectedCourseNode } from "../../../../store/Degree/degree-slice";
//styles
import "bootstrap/dist/css/bootstrap.min.css";

export type ModalProps = {
  openCondition: boolean;
};

const CourseModal = ({ openCondition }: ModalProps): JSX.Element => {
  const $view = useSelector((state: AppState) => state.app.view);
  const $selectedCourseNode = useSelector(
    (state: AppState) => state.degree.selectedCourseNode,
  );
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
              Hours: {$selectedCourseNode?.credits}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{$selectedCourseNode?.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CourseModal;
