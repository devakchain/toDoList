import React from "react";
import { useRef } from "react";

function InputApp({ addNewTask, deleteAllTasks }) {
  const textRef = useRef();
  const timeRef = useRef();

  function addTask(e) {
    e.preventDefault();
    const newUser = {
      text: textRef.current.value,
      time: timeRef.current.value,
      id: Date.now(),
    };

    addNewTask(newUser);

    textRef.current.value = " ";
    timeRef.current.value = " ";
  }

  function deleteTask(e) {
    e.preventDefault();

    deleteAllTasks();
  }
  return (
    <div className="inputApp">
      <h1>To Do List</h1>
      <form action="">
        <input ref={textRef} className="textinput" type="text" />
        <input ref={timeRef} className="timeinput" type="time" />
        <br />
        <button onClick={addTask} className="btn btn-info">
          Add Task
        </button>
        <button onClick={deleteTask} className="btn btn-info">
          Delete all Task
        </button>
      </form>
    </div>
  );
}

export default InputApp;
