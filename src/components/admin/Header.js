import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md align-items-center bg-info d-flex flex-column">
        <div className="container justify-content-around">
          <Link to={'/admin-users'}>
            <h3 className="m-2">ADMIN Users</h3>
          </Link>
          <span className="m-2">
            Hola Eduardo{' '}
            <button className="btn btn-secondary btn-sm rounded ml-1">
              Salir <HiOutlineLogout />
            </button>
          </span>
        </div>
        <div className="container justify-content-around align-items-center p-1">
          <Link className="nav-link" to={'/admin-users/agregar-usuario'}>
            Nuevo Usuario
          </Link>
          <Link className="nav-link" to={'/admin-users/logueos'}>
            Gráfico Logueos
          </Link>
          <Link className="nav-link" to={'/admin-users/graficos-usuarios'}>
            Gráfico Registro Usuarios
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
