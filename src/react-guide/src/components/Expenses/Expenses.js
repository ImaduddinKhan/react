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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFiltered}
          onFilterExpenses={filterExpensesHandler}
        />
        {props.expenseItems.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
