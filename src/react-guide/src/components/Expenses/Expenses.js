import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import "./ExpensesFilter.css";

const Expenses = (props) => {
  const [yearFiltered, setYearFiltered] = useState("2020");

  const filterExpensesHandler = (yearSelected) => {
    setYearFiltered(yearSelected);
  };

  const filteredExpenses = props.expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFiltered;
  });

  //here storing JSX contents in a variable
  let expensesContent = <p>No Expenses Found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFiltered}
          onFilterExpenses={filterExpensesHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
