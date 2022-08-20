import React, { useState } from "react";

import "./App.css";
import Output from "./components/Demo/Output";
import Button from "./components/UI/Button/Button";

function App() {
  const [showPara, setShowPara] = useState(false);

  console.log("App running");

  const showNewParaHandler = () => {
    setShowPara((prevState) => !prevState);
  };
  return (
    <div className="app">
      <p>Hello world</p>
      {/* {showPara && <p>Hello Pakistan</p>} */}
      <Output show={false} />
      <Button onClick={showNewParaHandler}>Toggle Button</Button>
    </div>
  );
}

export default App;
