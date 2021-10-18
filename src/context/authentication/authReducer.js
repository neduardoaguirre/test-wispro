import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_OUT,
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        message: null,
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
      };
    case GET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
