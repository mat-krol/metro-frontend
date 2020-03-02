import React from "react";
import classnames from "classnames";

import styles from "./AppModule.module.css";

export default function AppModule({ type, header, children }) {
  return (
    <div
      className={classnames(styles.wrapper, {
        [styles.splash]: type === "splash",
        [styles.select]: type === "select",
        [styles.blue]: type === "select",
        [styles.margin]: header
      })}
    >
      {children}
    </div>
  );
}
