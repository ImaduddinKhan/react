import { useState } from "react";
import Output from "./Output";

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);

  const textChangeHandler = () => {
    setChangedText((prevText) => !prevText);
  };

  // the following wrapped components in react test is known as
  // integrated test.
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>This is good to see you.</Output>}
      {changedText && <Output>Changed text</Output>}
      <button onClick={textChangeHandler}>Change Text</button>
    </div>
  );
};

export default Greetings;
