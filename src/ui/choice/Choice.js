import React from "react";
import _ from "lodash";
import styles from "./Choice.module.css";

import ChoiceItem from "./item/ChoiceItem";

function Choice(props) {
  return (
    <div className={styles.Choice}>
      {_.map(props.list, (item) => (
        <ChoiceItem
          key={item.text || item.key}
          {...item}
          to={item.to || props.to}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
}

export default Choice;
