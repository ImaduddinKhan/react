import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import "./ExpensesFilter.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [yearFiltered, setYearFiltered] = useState("2020");

  const filterExpensesHandler = (yearSelected) => {
    setYearFiltered(yearSelected);
  };

  const filteredExpenses = props.expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFiltered;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFiltered}
          onFilterExpenses={filterExpensesHandler}
        />
        <ExpensesList expenseItems={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
