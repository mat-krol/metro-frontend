import React from "react";

import SelectionItem from "./item/SelectionItem";
import classes from "./Selection.module.css";

export default function Selection({ horizontal, list }) {
  return (
    <div
      className={classes.Selection}
      style={{
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        justifyContent: "center",
      }}
    >
      {list.map((item) => (
        <SelectionItem
          horizontal={horizontal}
          key={item.text || item.key}
          disabled={item.disabled}
          icon={item.icon}
          onClick={item.onClick}
          src={item.src}
          to={item.to}
          text={item.text}
        />
      ))}
    </div>
  );
}
