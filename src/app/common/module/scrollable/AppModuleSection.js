import React from "react";
import classnames from "classnames";

import classes from "./AppModuleSection.module.css";

export default function AppModuleSection({ background, scrollable, children }) {
  return (
    <div
      className={classnames(classes.AppModuleSection, {
        [classes.AppModuleSectionLab]: background === "lab",
        [classes.AppModuleSectionWhite]: background === "white",
        [classes.AppModuleSectionScrollable]: scrollable,
      })}
    >
      {children}
    </div>
  );
}
