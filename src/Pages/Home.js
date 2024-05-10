import React, { useEffect } from "react";
import TaskDetails from "../Component/TaskDetails";
import TaskForm from "../Component/TaskForm";
import { useTasksContext } from "../hooks/useTasksContext";

const Home = () => {
  const { tasks, dispatch } = useTasksContext();

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((json) => dispatch({ type: "SET_TASKS", payload: json }))
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <div className="home">
      <div className="tasks">
        {tasks &&
          tasks.map((task) => <TaskDetails key={task.id} task={task} />)}
      </div>
      <TaskForm />
    </div>
  );
};

export default Home;
