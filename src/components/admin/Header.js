import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/authentication/authContext';
import { Link } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

const Header = () => {
  const authContext = useContext(AuthContext);
  const { user, userAuthenticated, logOut } = authContext;

  useEffect(() => {
    userAuthenticated();
    // eslint-disable-next-line
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg align-items-center bg-info d-flex flex-column">
        <div className="container justify-content-around">
          <Link to={'/admin-users'}>
            <h3 className="m-2">ADMIN Users</h3>
          </Link>
          {user ? (
            <span className="m-2">
              Hola <span className="user-name">{user.name}</span>
              <button
                className="btn btn-secondary btn-sm rounded ml-3"
                onClick={() => logOut()}
              >
                Salir <HiOutlineLogout />
              </button>
            </span>
          ) : (
            <div className="d-flex align-items-center">
              <strong>Cargando...</strong>
              <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          )}
        </div>
        <div className="container justify-content-around align-items-center p-1">
          <Link className="nav-link" to={'/admin-users/agregar-usuario'}>
            Nuevo Usuario
          </Link>
          <Link className="nav-link" to={'/admin-users/logueos'}>
            Gráfico Logueos
          </Link>
          <Link className="nav-link" to={'/admin-users/registro-usuarios'}>
            Gráfico Registro Usuarios
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
