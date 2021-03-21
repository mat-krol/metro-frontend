import React from "react";
import { Link } from "react-router-dom";

import styles from "./SelectionItem.module.css";

function SelectionItem(props) {
  const Icon = props.icon;
  return (
    <Link to={props.to} onClick={props.onClick}>
      <button className={styles.SelectionItem} disabled={props.disabled}>
        {/* {props.src && <img src={props.src} alt={props.text} style={{ height: "40px" }} />} */}
        {/* {props.src && props.text && <div style={{ width: "16px" }} />} */}
        {props.icon && <Icon style={{ fontSize: "24px" }} />}
        {props.icon && props.text && <div style={{ width: "16px" }} />}
        {props.text && <span>{props.text}</span>}
      </button>
    </Link>
  );
}

export default SelectionItem;
