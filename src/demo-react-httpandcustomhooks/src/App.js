import React, { useState, useEffect } from "react";

import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(process.env.REACT_APP_API_KEY);

      if (!response.ok) {
        throw new Error("Request Failed!");
      }
      const data = await response.json();

      const getTasks = [];

      for (const taskKey in data) {
        getTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(getTasks);
    } catch (err) {
      setError(err.message || "something went wrong");
    }
    setIsLoading(false);
  };

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <React.Fragment>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
