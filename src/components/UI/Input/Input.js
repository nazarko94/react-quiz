import React from "react";
import './Input.css';
import classNames from "classnames";

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = props => {
  const inputType = props.type || 'text'
  const cls = [classNames('input')]
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    cls.push(classNames('invalid'))
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {
        isInvalid(props)
          ? <span>{props.errorMessage || 'Введите верное значение'}</span>
          : null
      }
    </div>
  )
}

export default Input