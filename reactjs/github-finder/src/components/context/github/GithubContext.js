import { createContext, useReducer } from 'react';
import queryString from 'query-string';
import githubReducer from '../github/GithubReducer';
import userApi from '../../../API/userApi';

export const GithubContext = createContext();

function GithubProvider({ children }) {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const axiosUsers = async (params) => {
    const paramsString = queryString.stringify(params);
    setLoading();
    if (params.q !== '') {
      const userList = await userApi.get(paramsString);
      dispatch({
        type: 'GET_USERS',
        payload: userList.items,
      });
    }
  };

  const getUser = async (login) => {
    setLoading();
    const userList = await userApi.getUser(login);
    console.log(userList);
    dispatch({
      type: 'GET_USER',
      payload: userList,
    });
  };

  const getRepos = async (login) => {
    setLoading();
    const params = {
      sort: 'created',
      per_page: 10,
    };
    const reposList = await userApi.getRepos(login, params);
    console.log(reposList);
    dispatch({
      type: 'GET_REPOS',
      payload: reposList,
    });
  };

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  const clearUser = () => {
    dispatch({
      type: 'CLEAR_USER',
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        axiosUsers,
        clearUser,
        getUser,
        getRepos,
        repos: state.repos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;
