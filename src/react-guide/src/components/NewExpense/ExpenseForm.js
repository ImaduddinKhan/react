import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //Multiple States approach
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Single State apprach ( the above single state approach is preferable )
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (title) => {
    setEnteredTitle(title.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: title.target.value,
    // });

    /* 
        the above approach will give outdated/incorrect data snapshots,
        and in the following approach the inner function is used to give the 
        latest state data snapshot 
        if we depent on the previous state then the following approach is 
        preferable
    */

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: title.target.value };
    // });
  };
  const amountChangeHandler = (amount) => {
    setEnteredAmount(amount.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: amount.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: amount.target.value };
    // });
  };
  const dateChangeHandler = (date) => {
    setEnteredDate(date.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: date.target.value,
    // });

    /* 
        the above approach will give outdated/incorrect data snapshots,
        and in the following approach the inner function is used to give the 
        latest state data snapshot 
    */

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: date.target.value };
    // });
  };

  const submitHandler = (submitEvent) => {
    submitEvent.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
