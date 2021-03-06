import React from "react";
import _ from "lodash";
import styles from "./Option.module.css";

import OptionItem from "./item/OptionItem";

function Option(props) {
  return (
    <div
      className={styles.Option}
      style={{
        display: "flex",
        flexDirection: props.horizontal ? "row" : "column",
        justifyContent: "center",
      }}
    >
      {_.map(props.list, (item) => (
        <OptionItem
          key={item.text || item.key}
          disabled={item.disabled}
          icon={item.icon}
          onClick={item.onClick ? item.onClick : () => props.onClick(item.key)}
          src={item.src}
          to={item.to}
          text={item.text}
          color={item.color}
        />
      ))}
    </div>
  );
}

export default Option;
