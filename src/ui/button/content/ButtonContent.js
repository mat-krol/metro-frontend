import React from "react";
import classnames from "classnames";

import styles from "./ButtonContent.module.scss";

export default function ButtonContent({
  text,
  onClick,
  disabled,
  style,
  animated,
  inline,
  color,
}) {
  return (
    <button
      className={classnames(styles.button, {
        [styles.animated]: animated,
        [styles.inline]: inline,
        [styles.teal]: color === "teal",
      })}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  );
}
