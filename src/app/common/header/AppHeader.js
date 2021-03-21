import React from "react";
import classnames from "classnames";
// import { MdMenu } from "react-icons/md";

import AppIcon from "../icon/AppIcon";

import AppHeaderScore from "./score/AppHeaderScore";
import AppHeaderStats from "./stats/AppHeaderStats";
import classes from "./AppHeader.module.css";

export default function AppHeader({ type, satisfaction }) {
  return (
    <>
      <div
        className={classnames(classes.AppHeader, {
          [classes.AppHeaderBuild]: type === "build",
        })}
      >
        <AppIcon height="36px" />
        {/* <MdMenu size="24px" /> */}
        {satisfaction && <AppHeaderScore />}
      </div>
      <AppHeaderStats />
    </>
  );
}
