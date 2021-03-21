import React from "react";

import styles from "./Modal.module.css";
import Backdrop from "../backdrop/Backdrop";
import { FaTimes } from "react-icons/fa";

function Modal(props) {
  if (props.show) {
    return (
      <>
        <div className={styles.ModalHolder}>
          {props.onExit && (
            <div className={styles.ModalExit}>
              <FaTimes onClick={props.onExit} />
            </div>
          )}
          {props.children}
        </div>
        <Backdrop show onClick={props.onExit} color="black" />
      </>
    );
  } else {
    return null;
  }
}

export default Modal;
