import React from 'react';

import classes from './AppModuleSection.module.css';

function AppModuleSection(props) {
  return (
    <div className={className(props)}>
      {props.children}
    </div>
  )
}


const className = props => {
  const arr = [classes.AppModuleSection]
  props.background === "lab" && arr.push(classes.AppModuleSectionLab);
  props.background === "white" && arr.push(classes.AppModuleSectionWhite);
  props.scrollable && arr.push(classes.AppModuleSectionScrollable);
  return arr.join(' ')
}


export default AppModuleSection