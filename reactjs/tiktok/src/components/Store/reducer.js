import {
  ADD_VALUE,
  EDIT_VALUE,
  REMOVE_VALUE,
  SET_INPUT_VALUE,
} from './contains';

export const initState = {
  todos: [],
  todoInput: '',
};

function reducer(state, action) {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_VALUE:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_VALUE: {
      const newTodo = [...state.todos];
      newTodo.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodo,
      };
    }
    case EDIT_VALUE: {
      const newTodoList = [...state.todos];
      newTodoList.splice(action.id, 1, action.payload);
      console.log(action);
      console.log(newTodoList);
      console.log(state);
      const newA = {
        ...state,
        todos: newTodoList,
      };
      console.log(newA);
      return newA;
    }
    default:
      throw new Error('Invalid action');
  }
}

export default reducer;
