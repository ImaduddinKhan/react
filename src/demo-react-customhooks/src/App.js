import "./App.css";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

function App() {
  return (
    <div className="App">
      <ForwardCounter />
      <BackwardCounter />
    </div>
  );
}

export default App;
