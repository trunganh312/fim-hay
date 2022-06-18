import queryString from 'query-string';
import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'new',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const [todoList, setTodoList] = React.useState(initTodoList);
  const [fillter, setFillter] = React.useState(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    setFillter(params.status || 'all');
  }, [location.search]);

  function handleTodoClick(todo, idx) {
    // clone current arr
    const newTodoList = [...todoList];
    console.log(newTodoList);
    // Toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    console.log(newTodo);
    newTodoList[idx] = newTodo;
    console.log(newTodoList);
    // update todo list

    setTodoList(newTodoList);
  }

  function handleShowAll() {
    // setFillter('all');
    const queryParams = { status: 'all' };
    console.log(`?${queryString.stringify(queryParams)}`);
    navigate({
      search: `?${queryString.stringify(queryParams)}`,
    });
  }

  function handleShowNew() {
    // setFillter('new');
    const queryParams = { status: 'new' };
    navigate({
      search: queryString.stringify(queryParams),
    });
  }

  function handleShowCompleted() {
    // setFillter('completed');
    const queryParams = { status: 'completed' };
    navigate({
      search: queryString.stringify(queryParams),
    });
  }

  const rendered = useMemo(() => {
    return todoList.filter((todo) => fillter === 'all' || fillter === todo.status);
  }, [todoList, fillter]);
  console.log(rendered);

  const handleSubmitTodoForm = (values) => {
    const newTodoList = [...todoList];
    const newTodo = {
      ...values,
      id: newTodoList.length + 2,
      status: 'new',
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>What todo</h3>
      <TodoForm onSubmit={handleSubmitTodoForm} />
      <h3>Todo List</h3>
      <TodoList todoList={rendered} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAll}>Show all</button>
      <button onClick={handleShowNew}>Show new</button>
      <button onClick={handleShowCompleted}>Show completed</button>
    </div>
  );
}

export default ListPage;
