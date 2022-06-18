import { createSlice } from '@reduxjs/toolkit';

const reduxSlice = createSlice({
  name: 'redux-slice',
  initialState: {
    list: [],
    actionId: null,
  },
  reducers: {
    addHobby(state, action) {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    },

    setActiveHobby(state, action) {
      return {
        ...state,
        actionId: action.payload,
      };
    },
  },
});

const { actions, reducer } = reduxSlice;
export const { addHobby, setActiveHobby } = actions;
export default reducer;
