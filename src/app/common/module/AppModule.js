import React from 'react';
import classes from './AppModule.module.css'
// import Backdrop from '../../../ui/backdrop/Backdrop';

function AppModule(props) {
  // const [showBackdrop, setShowBackdrop] = React.useState(true)

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setShowBackdrop(false)
  //   }, 500);
  // }, [])

  return (
    <div className={className(props)}>
      {/* <Backdrop show={showBackdrop} color={props.backdrop} /> */}
      {props.children}
    </div>
  )
}

const className = props => {
  const arr = [classes.AppModule]
  props.type === "splash" && arr.push(classes.AppModuleSplash);
  props.header && arr.push(classes.AppModuleMargin);
  return arr.join(' ')
}

export default AppModule;