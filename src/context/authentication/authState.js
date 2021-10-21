import React, { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';

import axios from '../../config/axios';
import authToken from '../../config/authToken';
import Swal from 'sweetalert2';

import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_OUT,
  LOADING,
  CLEAN_MESSAGE,
} from '../../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    message: null,
    loading: null,
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
  });

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loading = () => ({
    type: LOADING,
    payload: true,
  });

  const cleanMessages = () => ({
    type: CLEAN_MESSAGE,
  });

  const registerUser = async (data) => {
    dispatch(loading());
    try {
      const res = await axios.post('/api/users', data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      userAuthenticated();
    } catch (error) {
      let msg;
      Array.isArray(error.response.data.msg)
        ? (msg = error.response.data.msg[0].msg)
        : (msg = error.response.data.msg);

      const alert = {
        msg,
        category: 'alert alert-danger text-center',
      };
      dispatch({
        type: REGISTER_FAILED,
        payload: alert,
      });
      dispatch(cleanMessages());
    }
  };

  const userAuthenticated = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      authToken(token);
    }
    try {
      const res = await axios.get('/api/auth');
      dispatch({
        type: GET_USER,
        payload: res.data.user,
      });
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: 'alert alert-danger text-center',
      };
      dispatch({
        type: LOGIN_FAILED,
        payload: alert,
      });
      dispatch(cleanMessages());
    }
  };

  const login = async (data) => {
    dispatch(loading());
    try {
      const res = await axios.post('/api/auth', data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      userAuthenticated();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: 'alert alert-danger text-center',
      };
      dispatch({
        type: LOGIN_FAILED,
        payload: alert,
      });
      dispatch(cleanMessages());
    }
  };

  const logOut = () => {
    dispatch({
      type: LOGIN_OUT,
    });
    Toast.fire({
      icon: 'success',
      title: 'Has cerrado sesión',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        message: state.message,
        loading: state.loading,
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
