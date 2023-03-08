import React from "react";
import "./InputNumber.scss";

const InputNumber = React.forwardRef((props, ref) => {

  return (
    <input
      type="number"
      className={props.className + " input-number"}
      id={props.id}
      min={props.min}
      max={props.max}
      defaultValue={props.defaultValue}
      ref={ref}
    />
  );
});

export default InputNumber;
