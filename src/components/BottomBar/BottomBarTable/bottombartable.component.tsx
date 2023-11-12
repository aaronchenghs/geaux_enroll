import React, { Fragment } from "react";

import styles from "./bottombartable.module.scss";

interface EntryProps {
  title: string;
  data: string | number;
}

interface TableDatumProps {
  data: EntryProps[];
}

const Entry = ({ title, data }: EntryProps): JSX.Element => {
  return (
    <div className={styles.entry}>
      <strong className={styles.title}>{title}: </strong>
      <label className={styles.data}>{data}</label>
    </div>
  );
};

export const BottomBarTable = ({ data }: TableDatumProps): JSX.Element => {
  return (
    <Fragment>
      <div className={styles.entriesContainer}>
        {data.map((entryData, index) => (
          <Entry key={index} title={entryData.title} data={entryData.data} />
        ))}
      </div>
    </Fragment>
  );
};

export default BottomBarTable;
