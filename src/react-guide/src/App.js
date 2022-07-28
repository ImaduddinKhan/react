import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e0",
      title: "Ice Cream",
      amount: 10,
      date: new Date(2020, 1, 12),
    },
    {
      id: "e1",
      title: "Fruits",
      amount: 20,
      date: new Date(2020, 1, 13),
    },
    {
      id: "e2",
      title: "Charger",
      amount: 190,
      date: new Date(2021, 10, 14),
    },
    {
      id: "e3",
      title: "Eggs",
      amount: 120,
      date: new Date(2020, 11, 21),
    },
  ];

  /*The following method is the old one by using the React import.
  Also this is the under the hood code which kinda is the result of the
  the JSX code we use*/

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(
  //     "h2",
  //     {},
  //     "Let's get started",
  //     React.createElement(Expenses, { expenses: expenses })
  //   )
  // );

  //The following is the new JSX method and is more convenient

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
