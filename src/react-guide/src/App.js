import Expenses from "./components/Expenses";

function App() {
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
