import { useState } from "react";

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);

  const textChangeHandler = () => {
    setChangedText((prevText) => !prevText);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>This is good to see you.</p>}
      {changedText && <h2>Changed text</h2>}
      <button onClick={textChangeHandler}>Change Text</button>
    </div>
  );
};

export default Greetings;
