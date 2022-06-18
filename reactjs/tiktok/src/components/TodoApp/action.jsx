import { SET_ACTION, ADD_ACTION, DELETE_ACTION } from './constains';

export function setAction(payload) {
  return {
    type: SET_ACTION,
    payload,
  };
}

export function addAction(payload) {
  return {
    type: ADD_ACTION,
    payload,
  };
}

export function deleteAction(i) {
  return {
    type: DELETE_ACTION,
    index: i,
  };
}
