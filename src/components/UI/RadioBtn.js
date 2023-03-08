import React from "react";
import "./RadioBtn.scss";

const RadioBtn = (props) => {
  return (
    <>
      <input
        className={`input-radio ${props.className}`}
        type="radio"
        name={props.name}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
      />
      <label className={`input-radio__label ${props.error && 'error'}` }htmlFor={props.id}>
        {props.children}
      </label>
    </>
  );
};

export default RadioBtn;
