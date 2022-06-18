import { useReducer, useRef } from 'react';
import { addAction, deleteAction, setAction } from './action';
import reducer, { initState } from './reducer';

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { todo, todoList } = state;
  const textRef = useRef();
  function handleClick() {
    dispatch(addAction(todo));
    dispatch(setAction(''));
    textRef.current.focus();
  }

  function handleDelete(i) {
    dispatch(deleteAction(i));
  }

  return (
    <div className="App" style={{ marginLeft: 20 }}>
      <h2>Todo</h2>
      <input
        ref={textRef}
        type="text"
        value={todo}
        onChange={e => {
          dispatch(setAction(e.target.value));
        }}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {todoList.map((todo, i) => {
          return (
            <li onClick={() => handleDelete(i)} key={i}>
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TodoApp;
