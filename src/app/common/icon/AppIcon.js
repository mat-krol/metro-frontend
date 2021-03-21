import React from "react";
import { Link } from "react-router-dom";

import icon from "../../../assets/icon-blue.png";
import styles from "./AppIcon.module.css";
import { ROUTES } from "../../constants/routes";

function AppIcon(props) {
  return (
    <Link to={ROUTES.MenuHome}>
      <img
        src={icon}
        alt="Logo"
        height={props.height}
        className={styles.AppIconImage}
      />
    </Link>
  );
}

export default AppIcon;
