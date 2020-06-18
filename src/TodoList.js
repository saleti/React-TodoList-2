import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function TodoList(props) {
  const { items, handleItemClick } = props;
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item.id}
          onClick={() => handleItemClick(index)}
          className={item.isCompleted ? "isCompleted" : ""}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  items: PropTypes.array
};

export default TodoList;
