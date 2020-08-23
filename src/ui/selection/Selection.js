import React from "react";
import _ from "lodash";
import classes from "./Selection.module.css";

import SelectionItem from "./item/SelectionItem";

function Selection(props) {
  return (
    <div
      className={classes.Selection}
      style={{
        display: "flex",
        flexDirection: props.horizontal ? "row" : "column",
        justifyContent: "center"
      }}
    >
      {_.map(props.list, item => (
        <SelectionItem
          horizontal={props.horizontal}
          key={item.text || item.key}
          {...item}
        />
      ))}
    </div>
  );
}

export default Selection;
