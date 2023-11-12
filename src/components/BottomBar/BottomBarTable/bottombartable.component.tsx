import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";

import styles from "./bottombartable.module.scss";

interface EntryProps {
  title: string;
  data: string | number;
}

const Entry = ({ title, data }: EntryProps): JSX.Element => {
  return (
    <div className={styles.entry}>
      <strong className={styles.title}>{title}: </strong>
      <label className={styles.data}>{data}</label>
    </div>
  );
};

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const BottomBarTable = (): JSX.Element => {
  const $student = useSelector((state: AppState) => state.student);
  const currentDateAndTime = formatDate(new Date());

  return (
    <Fragment>
      <div className={styles.entriesContainer}>
        <Entry title="College" data="Engineering" />
        <Entry
          title="Degree"
          data={`Computer Science - ${$student.majors[0].concentration}`}
        />
        <Entry title="Program" data="ENGINEERING" />
        <Entry title="Minor(s)" data="N/A" />
        <Entry title="Date" data={currentDateAndTime} />
        <Entry title="Catalog" data="2024" />
        <Entry title="Campus" data="LSU" />
      </div>
    </Fragment>
  );
};

export default BottomBarTable;
