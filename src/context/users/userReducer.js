import { LOADING, GET_USERS, ADD_USER, ERROR_ADD_USER } from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        redirect: false,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        message: null,
        redirect: true,
        loading: false,
      };
    case ERROR_ADD_USER:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
