import React from 'react';

const TodoList = (props) => {
  return (
    <div className="todo_style">
      <button
        onClick={() => {
          return props.onSelect(props.id);
        }}
      >
        -
      </button>
      <li> {props.text} </li>
    </div>
  );
};

export default TodoList;
