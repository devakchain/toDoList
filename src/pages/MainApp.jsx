import React from "react";
import InputApp from "../components/InputApp";
import TaskList from "../components/TaskList";
import { useState } from "react";

function MainApp() {
  const [tasks, setTasks] = useState([]);

  function addNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteAllTasks() {
    setTasks([]);
  }

  function deleteOneItem(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <div>
      <InputApp addNewTask={addNewTask} deleteAllTasks={deleteAllTasks} />
      <TaskList tasks={tasks} deleteOneItem={deleteOneItem} />
    </div>
  );
}

export default MainApp;
