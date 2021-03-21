import React from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";
import {
  MdSentimentNeutral,
  MdSentimentSatisfied,
  MdSentimentDissatisfied,
} from "react-icons/md";

import * as selectors from "redux/selectors";

import classes from "./AppHeaderScore.module.css";

export default function AppHeaderScore() {
  const satisfaction = useSelector(selectors.getRoundSatisfaction);

  return (
    <div
      className={classnames(classes.AppHeaderScore, {
        [classes.AppHeaderScore10]: satisfaction < 1,
        [classes.AppHeaderScore15]: satisfaction >= 1 && satisfaction < 2,
        [classes.AppHeaderScore20]: satisfaction >= 2 && satisfaction < 3,
        [classes.AppHeaderScore25]: satisfaction >= 3 && satisfaction < 4,
        [classes.AppHeaderScore30]: satisfaction >= 4 && satisfaction < 6,
        [classes.AppHeaderScore35]: satisfaction >= 6 && satisfaction < 7,
        [classes.AppHeaderScore40]: satisfaction >= 7 && satisfaction < 8,
        [classes.AppHeaderScore45]: satisfaction >= 8 && satisfaction < 9,
        [classes.AppHeaderScore50]: satisfaction >= 9,
      })}
    >
      {satisfaction < 2 && <MdSentimentDissatisfied />}
      {satisfaction >= 2 && satisfaction <= 4 && <MdSentimentNeutral />}
      {satisfaction > 4 && <MdSentimentSatisfied />}
      <span>{satisfaction}</span>
    </div>
  );
}
