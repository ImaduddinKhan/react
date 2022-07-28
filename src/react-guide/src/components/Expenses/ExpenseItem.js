import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  // let title = props.title;

  const clickEventHandler = () => {
    setTitle("test");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}SAR</div>
      </div>
      <button onClick={clickEventHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
