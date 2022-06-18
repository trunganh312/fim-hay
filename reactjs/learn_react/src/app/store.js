import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import reduxReducer from '../pages/ReduxPage/reduxListDemo';
import userReducer from '../features/Auth/userSlice';

const rootReducer = {
  count: counterReducer,
  hobby: reduxReducer,
  user: userReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
