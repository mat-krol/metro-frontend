import React from "react";
import styles from "./AppHeaderStatsItem.module.css";

function AppHeaderStatsItem({ variable, text }) {
  return (
    <div className={styles.AppHeaderStatsItem}>
      <span>{variable}</span>
      <p>{text}</p>
    </div>
  );
}

export default AppHeaderStatsItem;
