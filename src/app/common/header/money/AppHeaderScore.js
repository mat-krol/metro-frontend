import React from "react";
import styles from "./AppHeaderScore.module.css";
import { MdSentimentNeutral } from "react-icons/md";

function AppHeaderScore({ duration, finishQuiz }) {
  return (
    <div className={styles.AppHeaderScore}>
      <MdSentimentNeutral />
      2.8
    </div>
  );
}

export default AppHeaderScore;
