import React from "react";
import classnames from "classnames";

import styles from "./ButtonContent.module.css";

export default function ButtonContent({
  animated,
  inline,
  color,
  disabled,
  onClick,
  style,
  text
}) {
  return (
    <button
      className={classnames(styles.button, {
        [styles.ButtonAnimated]: animated,
        [styles.inline]: inline,
        [styles.colorTeal]: color === "teal",
        [styles.colorBlue]: color === "blue"
      })}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  );
}
