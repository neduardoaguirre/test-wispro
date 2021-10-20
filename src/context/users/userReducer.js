import {
  LOADING,
  GET_USERS,
  ADD_USER,
  ERROR_ADD_USER,
  EDIT_USER_OK,
  EDIT_USER_ERROR,
  SELECTED_USER,
  DELETE_USER,
  CLEAN_MESSAGE,
} from '../../types';

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
    case SELECTED_USER:
      return {
        ...state,
        userselected: action.payload,
      };
    case EDIT_USER_OK:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
        message: null,
        redirect: true,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload),
      };
    case EDIT_USER_ERROR:
    case ERROR_ADD_USER:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case CLEAN_MESSAGE:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};
