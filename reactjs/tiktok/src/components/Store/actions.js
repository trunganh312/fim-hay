import {
  SET_INPUT_VALUE,
  ADD_VALUE,
  REMOVE_VALUE,
  EDIT_VALUE,
} from './contains';

export function setValueInput(payload) {
  return {
    type: SET_INPUT_VALUE,
    payload,
  };
}

export function addValueInput(payload) {
  return {
    type: ADD_VALUE,
    payload,
  };
}

export function removeValueTodo(payload) {
  return {
    type: REMOVE_VALUE,
    payload,
  };
}

export function editValueTodo(payload, id) {
  return {
    type: EDIT_VALUE,
    payload,
    id,
  };
}
