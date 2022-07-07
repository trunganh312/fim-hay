import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../API/userApi';
import Storagekeys from '../../constant/storage-keys';

export const register = createAsyncThunk('user/register', async (payload) => {
  // call API to register
  const data = await userApi.register(payload);
  // save data to local storage
  localStorage.setItem(Storagekeys.TOKEN, data.jwt);
  localStorage.setItem(Storagekeys.USER, JSON.stringify(data.user));

  // return user data
  return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  // call API to login
  const data = await userApi.login(payload);
  // save data to local storage
  localStorage.setItem(Storagekeys.TOKEN, data.jwt);
  localStorage.setItem(Storagekeys.USER, JSON.stringify(data.user));

  // return user data
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(Storagekeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(Storagekeys.USER);
      localStorage.removeItem(Storagekeys.TOKEN);

      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;
