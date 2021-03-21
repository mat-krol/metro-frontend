import React from "react";
import { ROUTES } from "../../../constants/routes";
import { useSelector, useDispatch } from "react-redux";
import * as selectors from "../../../../redux/selectors";
import { updatePosition } from "../../../../redux/sagas/game";

import logo from "../../../../assets/icon-white.png";
import AppModule from "../../../common/module";
import Choice from "../../../../ui/choice/Choice";

function MenuCountry() {
  const dispatch = useDispatch();
  const list = useSelector(selectors.getLevelsList);

  const handleClick = (id) => {
    dispatch(updatePosition.trigger());
  };

  return (
    <AppModule type="select" header>
      <img
        src={logo}
        alt="logo"
        style={{ width: "115px", marginBottom: "2rem" }}
      />
      <Choice list={list} to={ROUTES.MenuBoard} onClick={handleClick} />
    </AppModule>
  );
}

// const list = [
//   { to: ROUTES.MenuBoard, text: "United Kingdom" },
//   { to: ROUTES.MenuBoard, text: "Brazil", disabled: true },
//   { to: ROUTES.MenuBoard, text: "Japan", disabled: true },
//   { to: ROUTES.MenuBoard, text: "France", disabled: true },
//   { to: ROUTES.MenuBoard, text: "Canada", disabled: true },
//   { to: ROUTES.MenuBoard, text: "Australia", disabled: true },
//   { to: ROUTES.MenuBoard, text: "Poland", disabled: true },
//   { to: ROUTES.MenuBoard, text: "South Korea", disabled: true },
//   { to: ROUTES.MenuBoard, text: "Egypt", disabled: true }
// ]

export default MenuCountry;
