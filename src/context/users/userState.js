import React, { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';
import { GET_USERS, ADD_USER, ERROR_ADD_USER, LOADING } from '../../types';
import axios from '../../config/axios';
import Swal from 'sweetalert2';

const UserState = (props) => {
  const initialState = {
    users: [],
    message: null,
    redirect: false,
    loading: false,
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

  return (
    <userContext.Provider
      value={{
        users: state.users,
        message: state.message,
        redirect: state.redirect,
        loading: state.loading,
        getUsers,
        addUser,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
