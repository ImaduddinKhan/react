import React, { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterTaskHandler = async (enteredTaskText) => {
    setLoading(true);
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
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={loading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
