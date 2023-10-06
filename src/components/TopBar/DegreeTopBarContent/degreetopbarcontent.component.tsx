import React, { Fragment } from "react";
import SegmentedProgressBar, {
  segment,
} from "../ProgressBar/segmentedprogressbar.component";
//styles
import styles from "./degreetopbarcontent.module.scss";

const sampleSegments: segment[] = [
  {
    id: "1",
    label: "wow",
    color: "#008000",
    value: 30,
    tooltip: "This is hours complete",
  },
  {
    id: "2",
    label: "wow",
    color: "#FFC300",
    value: 15,
    tooltip: "This is hours scheduled.",
  },
];

const DegreeTopBarContent = (): JSX.Element => {
  return (
    <Fragment>
      <div className={styles.progressBarContainer}>
        {" "}
        {/** max here should be the total hours needed to graduate */}
        <SegmentedProgressBar segments={sampleSegments} max={100} />
      </div>
    </Fragment>
  );
};

export default DegreeTopBarContent;
