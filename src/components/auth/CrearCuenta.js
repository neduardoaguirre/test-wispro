import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CrearCuenta = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    repeat: '',
  });
  const { userName, email, password, repeat } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="m-3 vh-100 row justify-content-center align-items-center">
      <div className="container col col-md-6 bg-secondary p-3 rounded">
        <h2 className="text-center m-2 font-weight-bold">Registrarse</h2>
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="form-group row px-3">
            <label htmlFor="email" className="col-sm-10 col-form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu nombre"
              name="userName"
              onChange={handleChange}
              value={userName}
            />
          </div>
          <div className="form-group row px-3">
            <label htmlFor="email" className="col-sm-10 col-form-label">
              Correo
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="correo@correo.com"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="form-group row px-3">
            <label className="col-sm-10 col-form-label" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Tu contraseña"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className="form-group row px-3">
            <label className="col-sm-10 col-form-label" htmlFor="repetir">
              Repetir Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Repetir contraseña"
              name="repetir"
              onChange={handleChange}
              value={repeat}
            />
          </div>
          <div className="form-group row px-3">
            <button
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >
              Registrarse
            </button>
          </div>
          <div className="form-group row px-3 m-0 mt-4">
            <Link to={'/'} className="text-muted">
              Iniciar Sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearCuenta;
