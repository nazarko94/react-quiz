import React from "react";
import './Backdrop.css';
import classNames from "classnames";

const Backdrop = (props) => {

  return (
    <div 
      className={classNames('backdrop')}
      onClick={props.onClick}
    >

    </div>
  )
}

export default Backdrop;