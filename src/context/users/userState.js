import React, { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';
import { GET_USERS } from '../../types';
import axios from '../../config/axios';

const UserState = (props) => {
  const initialState = {
    users: [],
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUsers = async () => {
    try {
      const res = await axios.get('/api/customers');
      console.log(res.data);
      dispatch({
        type: GET_USERS,
        payload: res.data.customers,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <userContext.Provider
      value={{
        users: state.users,
        getUsers,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
