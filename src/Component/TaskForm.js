import React, { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";

const TaskForm = () => {
  const { dispatch } = useTasksContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { title, description };
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await res.json();

      setTasks([...tasks, json.task]);
      setTitle("");
      setDescription("");
      dispatch({ type: "CREATE_TASK", payload: tasks });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Task</h3>

      <label>Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;
