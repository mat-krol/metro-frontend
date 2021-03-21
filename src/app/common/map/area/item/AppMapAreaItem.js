import React from "react";

import styles from "./AppMapAreaItem.module.css";
// import { calculateCenter } from '../../../../../helpers/utils';

function AppMapAreaItem(props) {
  // const [x, y] = calculateCenter(props.d)

  const handleToggle = () => {
    props.onClick && props.onClick(props.id, props.center);
  };

  return (
    <>
      <path
        d={props.d}
        id={props.id}
        className={className(props)}
        onClick={handleToggle}
        fill="rgb(243,243,243)"
        vectorEffect="non-scaling-stroke"
        strokeWidth="3"
        stroke="rgb(255,255,255)"
        strokeLinejoin="miter"
        strokeLinecap="square"
        strokeMiterlimit="3"
      />
      {/* <rect x="90.343" y="81.465" width="114.657" height="45.535" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)"/>
      <text transform="matrix(1,0,0,1,99.149,98.826)" style={{ fontFamily: 'Open Sans', fontWeight: "400", fontSize: "12px" }}>Population: 200K</text>
      <text transform="matrix(1,0,0,1,102.761,115.168)" style={{ fontFamily: 'Open Sans', fontWeight: "400", fontSize: "12px" }}>Satisfaction: 2.8</text> */}
    </>
  );
}

const className = (props) => {
  const { population, satisfaction } = props.metro;
  const arr = [styles.AppMapAreaItem];
  if (props.showPop) {
    population < 5 && arr.push(styles.AppMapAreaItemPopulation00);
    population >= 5 &&
      population < 10 &&
      arr.push(styles.AppMapAreaItemPopulation05);
    population >= 10 &&
      population < 15 &&
      arr.push(styles.AppMapAreaItemPopulation10);
    population >= 15 &&
      population < 20 &&
      arr.push(styles.AppMapAreaItemPopulation15);
    population >= 20 &&
      population < 25 &&
      arr.push(styles.AppMapAreaItemPopulation20);
    population >= 25 &&
      population < 30 &&
      arr.push(styles.AppMapAreaItemPopulation25);
    population >= 30 &&
      population < 40 &&
      arr.push(styles.AppMapAreaItemPopulation30);
    population >= 40 &&
      population < 60 &&
      arr.push(styles.AppMapAreaItemPopulation40);
    population >= 60 &&
      population < 75 &&
      arr.push(styles.AppMapAreaItemPopulation60);
    population >= 75 &&
      population < 100 &&
      arr.push(styles.AppMapAreaItemPopulation75);
    population >= 100 && arr.push(styles.AppMapAreaItemPopulation99);
  }
  if (props.showSat) {
    satisfaction <= 1 && arr.push(styles.AppMapAreaItemSatisfaction10);
    satisfaction > 1 &&
      satisfaction <= 2 &&
      arr.push(styles.AppMapAreaItemSatisfaction15);
    satisfaction > 2 &&
      satisfaction <= 3 &&
      arr.push(styles.AppMapAreaItemSatisfaction20);
    satisfaction > 3 &&
      satisfaction <= 4 &&
      arr.push(styles.AppMapAreaItemSatisfaction25);
    satisfaction > 4 &&
      satisfaction < 6 &&
      arr.push(styles.AppMapAreaItemSatisfaction30);
    satisfaction >= 6 &&
      satisfaction < 7 &&
      arr.push(styles.AppMapAreaItemSatisfaction35);
    satisfaction >= 7 &&
      satisfaction < 8 &&
      arr.push(styles.AppMapAreaItemSatisfaction40);
    satisfaction >= 8 &&
      satisfaction < 9 &&
      arr.push(styles.AppMapAreaItemSatisfaction45);
    satisfaction >= 9 && arr.push(styles.AppMapAreaItemSatisfaction50);
  }
  return arr.join(" ");
};

export default AppMapAreaItem;
