import React from "react";
import { Link } from "react-router-dom";

import ButtonContent from "./content/ButtonContent";

export default function Button({ onClick, to, ...rest }) {
  if (to) {
    return (
      <Link to={to} onClick={onClick}>
        <ButtonContent {...rest} />
      </Link>
    );
  } else {
    return <ButtonContent {...rest} onClick={onClick} />;
  }
}
