import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import CrearCuenta from './components/auth/CrearCuenta';
import AdminUsers from './components/admin/AdminUsers';
import AgregarUsuario from './components/admin/AgregarUsuario';
import EditarUsuario from './components/admin/EditarUsuario';

function App() {
  return (
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
  );
}

export default App;
