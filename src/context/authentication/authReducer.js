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

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        message: null,
        loading: false,
        refresh: false,
      };
    case LOGIN_OUT:
    case LOGIN_FAILED:
    case REGISTER_FAILED:
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        isAuthenticated: null,
        token: null,
        message: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        refresh: false,
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
