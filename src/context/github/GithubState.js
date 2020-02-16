import React, { useReducer } from "react";
import github from "../../api/github";
import githubContext from "./githubContext";
import githubReducer from "./githubReducer";
import {
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  CLEAR_USERS,
  SEARCH_USERS
} from "../types";

const GithubState = props => {
  const searchUsers = async text => {
    setIsLoading();
    const result = await github.get(`/search/users?q=${text}`);
    dispatch({ type: SEARCH_USERS, payload: result.data.items });
  };
  const clearUsers = () => {
    clrUsers();
  };

  const getUser = async username => {
    setIsLoading();
    const result = await github.get(`/users/${username}`);
    dispatch({ type: GET_USER, payload: result.data });
  };

  const getRepos = async username => {
    setIsLoading();
    const result = await github.get(
      `/users/${username}/repos?per_page=5&sort=created:asc`
    );
    dispatch({ type: GET_REPOS, payload: result.data });
  };

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setIsLoading = () => dispatch({ type: SET_LOADING });
  const clrUsers = () => dispatch({ type: CLEAR_USERS });

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getRepos
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
