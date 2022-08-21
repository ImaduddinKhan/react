import React, { useState, useCallback } from "react";

import "./App.css";
import Output from "./components/Demo/Output";
import Button from "./components/UI/Button/Button";

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App running");

  const showNewParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowPara((prevState) => !prevState);
    }
  }, [allowToggle]);
  /**Callbacks are used for comparing the resultant object from the
   * function each time while rendering the component, and while using
   * a fuction inside other function, the comparison of its different
   * values at diff: times will be complicated. Thats why useCallbacs
   * compares those values at diff: times by using the second argument
   * (an array which holds dependencies) which in this case is
   * allowToggle...
   */

  const allowTogglingHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <p>Hello world</p>
      {/* {showPara && <p>Hello Pakistan</p>} */}
      <Output show={showPara} />
      <Button onClick={allowTogglingHandler}>Allow Toggling</Button>
      <Button onClick={showNewParaHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
