import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./server";
import { TasksContextProvider } from "./Context/TaskContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </React.StrictMode>
);
