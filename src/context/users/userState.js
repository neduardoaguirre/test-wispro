import React, { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';
import {
  LOADING,
  GET_USERS,
  ADD_USER,
  ERROR_ADD_USER,
  EDIT_USER_OK,
  SELECTED_USER,
  EDIT_USER_ERROR,
  DELETE_USER,
} from '../../types';
import axios from '../../config/axios';
import Swal from 'sweetalert2';

const UserState = (props) => {
  const initialState = {
    users: [],
    message: null,
    redirect: false,
    loading: false,
    userselected: null,
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loading = () => ({
    type: LOADING,
    payload: true,
  });

  const getUsers = async () => {
    dispatch(loading());
    try {
      const res = await axios.get('/api/customers');
      dispatch({
        type: GET_USERS,
        payload: res.data.customers,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (user) => {
    dispatch(loading());
    try {
      const res = await axios.post('/api/customers', user);
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
      Swal.fire(
        'Operación Exitosa',
        'El usuario se agregó correctamente',
        'success'
      );
    } catch (error) {
      let msg;
      error.response.data.msg === undefined
        ? (msg = 'Ocurrió un error, intente nuevamente')
        : (msg = error.response.data.msg);
      const alert = {
        msg,
        category: 'alert alert-danger',
      };
      dispatch({
        type: ERROR_ADD_USER,
        payload: alert,
      });
    }
  };

  const getUserToEdit = (user) => {
    dispatch({
      type: SELECTED_USER,
      payload: user,
    });
  };

  const editUserOk = (user) => ({
    type: EDIT_USER_OK,
    payload: user,
  });

  const editUser = async (user) => {
    dispatch(loading());
    try {
      await axios.put(`api/customers/${user._id}`, user);
      dispatch(editUserOk(user));
      Swal.fire(
        'Operación Exitosa',
        'El usuario se editó correctamente',
        'success'
      );
    } catch (error) {
      console.log(error);
      let msg;
      error.response.data.msg === undefined
        ? (msg = 'Ocurrió un error, intente nuevamente')
        : (msg = error.response.data.msg);
      const alert = {
        msg,
        category: 'alert alert-danger',
      };
      dispatch({
        type: EDIT_USER_ERROR,
        payload: alert,
      });
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/customers/${userId}`);
      dispatch({
        type: DELETE_USER,
        payload: userId,
      });
      Swal.fire(
        '¡Eliminado!',
        'El cliente se eliminó correctamente.',
        'success'
      );
    } catch (error) {
      console.log(error);
      Swal.fire('¡Oops!', 'Ocurrió un error, intente nuevamente', 'error');
    }
  };

  return (
    <userContext.Provider
      value={{
        users: state.users,
        message: state.message,
        redirect: state.redirect,
        loading: state.loading,
        userselected: state.userselected,
        getUsers,
        addUser,
        getUserToEdit,
        editUser,
        deleteUser,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
