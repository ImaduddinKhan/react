import React from "react";
import useCounter from "../hooks/use-counter";
import Card from "./Card";

function BackwardCounter(props) {
  const counter = useCounter(false);

  //   const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCounter((prevCount) => prevCount - 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div>
      <Card>{counter}</Card>
    </div>
  );
}

export default BackwardCounter;
