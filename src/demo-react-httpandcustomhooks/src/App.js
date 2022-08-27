import React, { useState, useEffect, useCallback } from "react";

import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "./hooks/use-http";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTask = useCallback((dataObj) => {
    const getTasks = [];

    for (const taskKey in dataObj) {
      getTasks.push({ id: taskKey, text: dataObj[taskKey].text });
    }
    setTasks(getTasks);
  }, []);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp(transformTask);

  useEffect(() => {
    fetchTasks({ url: process.env.REACT_APP_API_KEY });
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
