import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";

interface HeaderProps {
  pretitle: string; // top part of the text
  title: string; // larger bottom part of the text
}

import styles from "./header.module.scss";
import { useDispatch } from "react-redux";
import { returnFromCurrentSelection } from "../../../../../store/Semester/semester-slice";

export const Header = ({ pretitle, title }: HeaderProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <div className={styles.back_container}>
        <Button
          className={styles.back}
          onClick={(): unknown => dispatch(returnFromCurrentSelection())}
        >
          <ArrowBack />
        </Button>
      </div>
      <div className={styles.text_container}>
        <p> {pretitle} </p>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};
