import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import styles from "./SelectionItem.module.scss";

function SelectionItem({ icon, to, text, onClick, color, disabled }) {
  const Icon = icon;
  return (
    <Link to={to} onClick={onClick}>
      <button
        className={classnames(styles.SelectionItem, {
          [styles.colorBlue]: color === "blue",
          [styles.colorWhite]: color === "white" || !color
        })}
        disabled={disabled}
      >
        {/* {src && <img src={src} alt={text} style={{ height: "40px" }} />} */}
        {/* {src && text && <div style={{ width: "16px" }} />} */}
        {icon && <Icon style={{ fontSize: "24px" }} />}
        {icon && text && <div style={{ width: "16px" }} />}
        {text && <span>{text}</span>}
      </button>
    </Link>
  );
}

export default SelectionItem;
