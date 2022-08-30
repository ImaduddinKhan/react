import "./App.css";
import BasicForm from "./components/BasicForm";
import SimpleInput from "./components/SimpleInput";

function App() {
  return (
    <div className="app">
      <section>
        <SimpleInput />
      </section>
      <br />
      <hr />
      <br />
      <section>
        <BasicForm />
      </section>
    </div>
  );
}

export default App;
