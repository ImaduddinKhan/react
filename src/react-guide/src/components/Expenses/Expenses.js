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
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
