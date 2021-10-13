import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const { email, password } = user;

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
        <h2 className="text-center my-3 font-weight-bold">Iniciar Sesión</h2>
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="form-group row px-3">
            <label htmlFor="email" className="col-sm-10 col-form-label">
              Correo
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="correo@correo.com"
              name="email"
              value={email}
              onChange={handleChange}
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
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group row px-3">
            <button
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="form-group row px-3 m-0 mt-4">
            <Link to={'/crear-cuenta'} className="text-muted">
              Crear Cuenta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
