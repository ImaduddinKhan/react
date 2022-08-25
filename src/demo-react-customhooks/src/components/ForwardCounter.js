import React, { useState, useEffect } from "react";
import Card from "./Card";

function ForwardCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Card>{counter}</Card>
    </div>
  );
}

export default ForwardCounter;
