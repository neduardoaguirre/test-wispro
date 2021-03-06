import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, userAuthenticated, token } = authContext;

  useEffect(() => {
    userAuthenticated();
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !isAuthenticated && !token ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
