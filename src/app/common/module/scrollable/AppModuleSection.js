import React from "react";
import classnames from "classnames";

import styles from "./AppModuleSection.module.css";

export default function AppModuleSection({ background, scrollable, children }) {
  return (
    <div
      className={classnames(styles.AppModuleSection, {
        [styles.AppModuleSectionLab]: background === "lab",
        [styles.AppModuleSectionWhite]: background === "white",
        [styles.AppModuleSectionScrollable]: scrollable,
      })}
    >
      {children}
    </div>
  );
}
