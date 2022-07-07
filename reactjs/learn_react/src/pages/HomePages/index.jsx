// import './App.css';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import Clock from './components/Clock';
import Pagination from './components/Pagination';
import PostFiterForm from './components/PostFilterForm';
import PostList from './components/PostList';
// import TodoFeature from './features/Todo';

// const todoList = [
//   { id: 1, title: 'I love Easy Frontend! 😍 ' },
//   { id: 2, title: 'We love Easy Frontend! 🥰 ' },
//   { id: 3, title: 'They love Easy Frontend! 🚀 ' },
// ];

function HomePages() {
  // const [todos, setTodos] = useState(todoList);

  // function handleTodoList(todo) {
  //   const index = todos.findIndex((x, i) => x.id === todo.id);
  //   const newTodo = [...todos];
  //   newTodo.splice(index, 1);
  //   setTodos(newTodo);
  // }

  // function handleOnSubmitForm(formValue) {
  //   console.log(formValue);
  //   const objTodo = {
  //     id: todos.length + 1,
  //     title: formValue.title,
  //   };
  //   console.log(objTodo);
  //   const newTodo = [...todos, objTodo];
  //   console.log(newTodo);
  //   setTodos(newTodo);
  // }

  // const [show, setShow] = useState(false);

  // function handleClick() {
  //   setShow(!show);
  // }

  const [post, setPost] = useState([]);
  const [page, setPage] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 10,
  });

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
    title_like: 'dolor',
  });

  useEffect(() => {
    // fetch('http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1')
    //   .then(response => response.json())
    //   .then(data => setPost(data.data));

    async function fetchPost() {
      try {
        const paramsString = queryString.stringify(filter);
        console.log(paramsString);
        const response = await fetch(`http://js-post-api.herokuapp.com/api/posts?${paramsString}`);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const { data, pagination } = responseJSON;
        setPost(data);
        setPage(pagination);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPost();
  }, [filter]);

  function handleOnChangePage(newPage) {
    const newfilters = {
      ...filter,
      _page: newPage,
    };

    setFilter(newfilters);
  }

  function handleOnSubmitSearch(formValue) {
    console.log(formValue);
    setFilter({
      ...filter,
      _page: 1,
      title_like: formValue.value,
    });
  }

  return (
    <div className="App">
      {/* <TodoFeature /> */}
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleOnSubmitForm} />
      <TodoList todoList={todos} onTodoClick={handleTodoList} />
      <button onClick={handleClick}>Click me!</button>
      {show && <Clock />} */}
      <PostList post={post} />
      <Pagination onChangePage={handleOnChangePage} page={page} />
      <PostFiterForm onSubmitSearch={handleOnSubmitSearch} />
      <Clock />
    </div>
  );
}

export default HomePages;
