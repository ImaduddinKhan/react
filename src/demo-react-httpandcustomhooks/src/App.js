import React, { useState, useEffect } from "react";

import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "./hooks/use-http";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTask = (dataObj) => {
      const getTasks = [];

      for (const taskKey in dataObj) {
        getTasks.push({ id: taskKey, text: dataObj[taskKey].text });
      }
      setTasks(getTasks);
    };
    fetchTasks({ url: process.env.REACT_APP_API_KEY }, transformTask);
  }, [fetchTasks]);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

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
