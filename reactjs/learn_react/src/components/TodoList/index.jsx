import React from 'react';

TodoList.propTypes = {};

function TodoList(props) {
  const { todoList, onTodoClick } = props;

  function handleClick(todo) {
    onTodoClick(todo);
  }

  return (
    <div>
      <ul>
        {todoList.map((todo, idx) => {
          return (
            <li key={idx} onClick={() => handleClick(todo)}>
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
