import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import CrearCuenta from './components/auth/CrearCuenta';
import AdminUsers from './components/admin/AdminUsers';
import AgregarUsuario from './components/admin/AgregarUsuario';
import EditarUsuario from './components/admin/EditarUsuario';
import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import authToken from './config/authToken';
import UsersState from './context/users/userState';

const token = localStorage.getItem('token');
if (token) {
  authToken(token);
}

function App() {
  return (
    <UsersState>
      <AlertState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/crear-cuenta" component={CrearCuenta} />
              <Route exact path="/admin-users" component={AdminUsers} />
              <Route
                exact
                path="/admin-users/agregar-usuario"
                component={AgregarUsuario}
              />
              <Route
                exact
                path="/admin-users/editar-usuario"
                component={EditarUsuario}
              />
            </Switch>
          </Router>
        </AuthState>
      </AlertState>
    </UsersState>
  );
}

export default App;
