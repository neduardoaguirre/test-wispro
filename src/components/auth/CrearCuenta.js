import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const CrearCuenta = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;
  const authContext = useContext(AuthContext);
  const { registerUser, message, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) props.history.push('/admin-users');
    if (message) showAlert(message.msg, message.category);
    // eslint-disable-next-line
  }, [message, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    repeat: '',
  });
  const { name, email, password, repeat } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      repeat.trim() === ''
    ) {
      showAlert('Todos los campos son obligatorios', 'alert alert-danger');
      return;
    }
    // Check los 2 pass
    if (password.length !== repeat.length) {
      showAlert('Las contraseñas no coinciden', 'alert alert-danger');
      return;
    }
    // Pasarlo al action
    registerUser({
      name,
      email,
      password,
    });
  };

  return (
    <div className="m-3 row justify-content-center align-items-center">
      <div className="container col col-md-6 bg-secondary p-3 my-5 rounded">
        <h2 className="text-center my-2 font-weight-bold">Registrarse</h2>
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="form-group row px-3">
            <label htmlFor="name" className="col-sm-10 col-form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu nombre"
              name="name"
              onChange={handleChange}
              value={name}
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
            <label className="col-sm-10 col-form-label" htmlFor="repeat">
              Repetir Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Repetir contraseña"
              name="repeat"
              onChange={handleChange}
              value={repeat}
            />
          </div>
          {alert ? (
            <div className={`msg-alert ${alert.category}`}>{alert.msg}</div>
          ) : null}
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
