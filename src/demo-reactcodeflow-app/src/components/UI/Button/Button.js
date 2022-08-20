import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button running");
  return (
    <button
      type={props.type}
      className={`${classes.button} ${classes.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
