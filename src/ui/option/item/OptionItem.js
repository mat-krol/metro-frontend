import React from "react";
import { Link } from "react-router-dom";

import styles from "./OptionItem.module.css";

function OptionItem(props) {
  const Icon = props.icon;
  if (props.to) {
    return (
      <Link to={props.to} onClick={props.onClick}>
        <button className={styles.OptionItem} disabled={props.disabled}>
          <div className={styles.OptionItemIcon}>
            <Icon style={{ fontSize: "24px" }} />
          </div>
          {props.text && <span>{props.text}</span>}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={props.onClick}
        className={styles.OptionItem}
        disabled={props.disabled}
      >
        <div className={styles.OptionItemIcon}>
          {props.icon ? (
            <Icon style={{ fontSize: "24px" }} />
          ) : (
            <div
              className={styles.OptionItemIconCircle}
              style={{ background: props.color }}
            />
          )}
        </div>
        {props.text && <span>{props.text}</span>}
      </button>
    );
  }
}

export default OptionItem;
