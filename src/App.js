import React, { useState } from "react";
import TodoList from "./TodoList";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = function(e) {
    e.preventDefault();
    if (newItem.length === 0) return;

    const newInput = {
      text: newItem,
      id: Date.now()
    };
    setTodoList(todoList => [...todoList, newInput]);
    setNewItem("");
    console.log(todoList);
  };

  return (
    <>
      <div className="App">TODO list</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newtodo"> Add to list item</label>
        <input
          id="newtodo"
          onChange={e => setNewItem(e.target.value)}
          value={newItem}
        />
        <button>Add item</button>
      </form>
      <TodoList items={todoList} />
    </>
  );
}
