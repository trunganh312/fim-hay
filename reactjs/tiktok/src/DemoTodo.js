import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import './App.css';
import { Context } from './components/Store/Context';
import {
  addValueInput,
  setValueInput,
  removeValueTodo,
  editValueTodo,
} from './components/Store/actions';

let id;
function DemoTodo() {
  const [state, dispatch] = useContext(Context);
  const { todos, todoInput } = state;
  const [edit, setEdit] = useState(false);
  const inputRef = useRef();
  function handleAddTodo() {
    dispatch(addValueInput(todoInput));
    dispatch(setValueInput(''));
    inputRef.current.focus();
  }

  function handleDeleteClick(i) {
    dispatch(removeValueTodo(i));
  }

  function handleChangeTodo(todo, i) {
    setEdit(!edit);
    dispatch(setValueInput(todo));
    id = i;
    inputRef.current.focus();
  }

  function handleUpdateTodo() {
    setEdit(!edit);
    dispatch(editValueTodo(todoInput, id));
    dispatch(setValueInput(''));
  }

  return (
    <div>
      <h1>Todo </h1>
      <input
        ref={inputRef}
        type="text"
        value={todoInput}
        onChange={e => dispatch(setValueInput(e.target.value))}
      />
      <button onClick={edit ? handleUpdateTodo : handleAddTodo}>
        {edit ? 'Edit' : 'Add'}
      </button>
      {todos.map((todo, i) => {
        return (
          <li key={i}>
            {todo}
            <button onClick={() => handleChangeTodo(todo, i)}>Sửa</button>
            <button onClick={() => handleDeleteClick(i)}>Xóa</button>
          </li>
        );
      })}
    </div>
  );
}

export default DemoTodo;
