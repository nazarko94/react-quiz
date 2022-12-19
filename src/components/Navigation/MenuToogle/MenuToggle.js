import React from "react";
import './MenuToggle.css';
import classNames from "classnames";

const MenuToggle = (props) => {
  const cls = [
    classNames('menuToggle', 'fa')
  ];

  if(props.isOpen) {
    cls.push('fa-times')
    cls.push(classNames('open'))
  } else {
    cls.push(classNames('fa-bars'))
  }

  return (
    <i  className={cls.join(' ')}
        onClick={props.onToggle}
    >
    </i>
  )
};

export default MenuToggle;