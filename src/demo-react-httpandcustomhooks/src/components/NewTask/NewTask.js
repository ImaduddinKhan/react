import React, { useState } from "react";

import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterTaskHandler = async (enteredTaskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(process.env.REACT_APP_API_KEY, {
        method: "POST",
        body: JSON.stringify({ text: enteredTaskText }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const generatedId = data.name;

      const createdTask = { id: generatedId, text: enteredTaskText };
      props.onAddTask(createdTask);
      console.log(createdTask);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  };
  return (
    <div>
      <TaskForm onEnterTask={enterTaskHandler} loading={isloading} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default NewTask;
