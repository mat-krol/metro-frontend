import React from "react";

import logo from "../../../assets/icon-white.png";
import text from "../../../assets/text.png";
import styles from "./AppBanner.module.css";

function AppBanner(props) {
  return (
    <div className={styles.AppBanner}>
      <img
        src={logo}
        alt="logo"
        style={{ width: "115px", marginBottom: "2rem" }}
      />
    </div>
  );
}

export default AppBanner;
