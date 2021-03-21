import React from "react";

import styles from "./Backdrop.module.css";

function Backdrop(props) {
  return <div className={className(props)} onClick={props.onClick} />;
}

const className = (props) => {
  const arr = [styles.Backdrop];
  props.sharp && arr.push(styles.BackdropSharp);
  props.color === "blue" && arr.push(styles.BackdropBlue);
  props.color === "black" && arr.push(styles.BackdropBlack);
  props.color === "deepblack" && arr.push(styles.BackdropDeepBlack);
  props.color === "white" && arr.push(styles.BackdropWhite);
  props.color === "transparent" && arr.push(styles.BackdropTransparent);
  props.show ? arr.push(styles.BackdropShow) : arr.push(styles.BackdropHide);
  return arr.join(" ");
};

export default Backdrop;
