import React from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";
import {
  MdSentimentNeutral,
  MdSentimentSatisfied,
  MdSentimentDissatisfied,
} from "react-icons/md";

import * as selectors from "redux/selectors";

import styles from "./AppHeaderScore.module.css";

export default function AppHeaderScore() {
  const satisfaction = useSelector(selectors.getRoundSatisfaction);

  return (
    <div
      className={classnames(styles.AppHeaderScore, {
        [styles.AppHeaderScore10]: satisfaction < 1,
        [styles.AppHeaderScore15]: satisfaction >= 1 && satisfaction < 2,
        [styles.AppHeaderScore20]: satisfaction >= 2 && satisfaction < 3,
        [styles.AppHeaderScore25]: satisfaction >= 3 && satisfaction < 4,
        [styles.AppHeaderScore30]: satisfaction >= 4 && satisfaction < 6,
        [styles.AppHeaderScore35]: satisfaction >= 6 && satisfaction < 7,
        [styles.AppHeaderScore40]: satisfaction >= 7 && satisfaction < 8,
        [styles.AppHeaderScore45]: satisfaction >= 8 && satisfaction < 9,
        [styles.AppHeaderScore50]: satisfaction >= 9,
      })}
    >
      {satisfaction < 2 && <MdSentimentDissatisfied />}
      {satisfaction >= 2 && satisfaction <= 4 && <MdSentimentNeutral />}
      {satisfaction > 4 && <MdSentimentSatisfied />}
      <span>{satisfaction}</span>
    </div>
  );
}
