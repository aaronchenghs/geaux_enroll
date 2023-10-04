import styles from "./topbar.module.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FlowChartIcon } from "../../../../assets/topbar/topbar.svgs";

const TopBar = (): JSX.Element => {
  const navigate = useNavigate();

  const handleIconClick = (): void => {
    navigate("/");
  };

  return (
    <div className={styles.TopBar}>
      This is top bar of the semester view
      <Button onClick={handleIconClick}>{FlowChartIcon}</Button>
    </div>
  );
};

export default TopBar;
