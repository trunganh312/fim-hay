import { SET_ACTION, ADD_ACTION, DELETE_ACTION } from './constains';

export const initState = {
  todo: '',
  todoList: [],
};
const reducer = (state, action) => {
  console.log('prevstate', state);
  console.log(action);
  switch (action.type) {
    case SET_ACTION: {
      return {
        ...state,
        todo: action.payload,
      };
    }
    case ADD_ACTION: {
      const newTodoList = [...state.todoList, action.payload];
      return {
        ...state,
        todoList: newTodoList,
      };
    }
    case DELETE_ACTION: {
      const newTodoList = [...state.todoList];
      newTodoList.splice(action.index, 1);
      return {
        ...state,
        todoList: newTodoList,
      };
    }
    default:
      throw new Error('Lỗi');
  }
};

export default reducer;
