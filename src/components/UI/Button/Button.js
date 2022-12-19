import React from "react";
import './Button.css';
import classNames from "classnames";

const Button = (props) => {
  const cls = [
    classNames('button'),
    [props.type]
  ]

  return (
    <button
      onClick={props.onClick}
      className={cls.join(' ')}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button;