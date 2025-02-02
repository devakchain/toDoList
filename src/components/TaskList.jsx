import React from "react";
import ItemApp from "./ItemApp";

function TaskList({ tasks, deleteOneItem }) {
  return (
    <div className="taskList">
      <h1>Add your task here: </h1>
      {tasks.map((item) => {
        return (
          <ItemApp key={item.id} item={item} deleteOneItem={deleteOneItem} />
        );
      })}
    </div>
  );
}

export default TaskList;
