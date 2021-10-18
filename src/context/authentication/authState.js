import React, { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';

import axios from '../../config/axios';
import authToken from '../../config/authToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_OUT,
} from '../../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    message: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async (data) => {
    try {
      const res = await axios.post('/api/users', data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      userAuthenticated();
    } catch (error) {
      // console.log(error.response.data.msg);
      let msg;
      Array.isArray(error.response.data.msg)
        ? (msg = error.response.data.msg[0].msg)
        : (msg = error.response.data.msg);

      const alert = {
        msg,
        category: 'alert alert-danger',
      };
      dispatch({
        type: REGISTER_FAILED,
        payload: alert,
      });
    }
  };

  const userAuthenticated = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      authToken(token);
    }
    try {
      const res = await axios.get('/api/auth');
      // console.log(res);
      dispatch({
        type: GET_USER,
        payload: res.data.user,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_FAILED,
      });
    }
  };

  const login = async (data) => {
    try {
      const res = await axios.post('/api/auth', data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      userAuthenticated();
    } catch (error) {
      // console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: 'alert alert-danger',
      };
      dispatch({
        type: LOGIN_FAILED,
        payload: alert,
      });
    }
  };

  const logOut = () => {
    dispatch({
      type: LOGIN_OUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        message: state.message,
        registerUser,
        login,
        userAuthenticated,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
