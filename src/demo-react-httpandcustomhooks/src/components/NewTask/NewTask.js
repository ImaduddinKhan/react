import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendPostReq } = useHttp();

  const createTask = (enteredTaskText, taskData) => {
    const generatedId = taskData.name;

    const createdTask = { id: generatedId, text: enteredTaskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (enteredTaskText) => {
    sendPostReq(
      {
        url: process.env.REACT_APP_API_KEY,
        method: "POST",
        headers: { "content-type": "applicaiton/json" },
        body: { text: enteredTaskText },
      },
      createTask.bind(null, enteredTaskText)
    );
  };
  return (
    <div>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default NewTask;
