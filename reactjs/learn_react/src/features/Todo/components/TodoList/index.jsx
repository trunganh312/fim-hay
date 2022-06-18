import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList({ todoList, onTodoClick }) {
  function handleClick(todo, idx) {
    onTodoClick(todo, idx);
  }

  return (
    <ul>
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          data-index={todo.id}
          className={classnames({
            completed: todo.status === 'completed',
            'todo-item': true,
          })}
          onClick={() => handleClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
