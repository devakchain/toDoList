import React from "react";

function ItemApp({ item, deleteOneItem }) {
  function deleteTask() {
    if (window.confirm("are you sure you want to delete?")) {
      deleteOneItem(item.id);
    }
  }
  return (
    <div className="box1">
      <li>{item.text} </li>
      <span>{item.time}</span>
      <button onClick={deleteTask} className="btn btn-info">
        Delete
      </button>
    </div>
  );
}

export default ItemApp;
