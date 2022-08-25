import React from "react";
import useCounter from "../hooks/use-counter";
import Card from "./Card";

function ForwardCounter() {
  const counter = useCounter();

  return (
    <div>
      <Card>{counter}</Card>
    </div>
  );
}

export default ForwardCounter;
