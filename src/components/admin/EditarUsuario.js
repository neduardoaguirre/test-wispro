import React, { useState, useContext, useEffect } from 'react';
import Header from './Header';
import userContext from '../../context/users/userContext';
import AlertContext from '../../context/alerts/alertContext';
import { useHistory } from 'react-router';

const EditarUsuario = (props) => {
  const usersContext = useContext(userContext);
  const { userselected, editUser, loading, message, redirect } = usersContext;

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const history = useHistory();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    document: '',
    address: '',
  });
  useEffect(() => {
    !userselected && history.push('/admin-users');
    message && showAlert(message.msg, message.category);
    redirect && history.push('/admin-users');
    setUser(userselected);
    // eslint-disable-next-line
  }, [message, history, redirect, userselected]);

  const { firstName, lastName, email, document, address } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      document === '' ||
      email.trim() === '' ||
      address.trim() === ''
    ) {
      showAlert('Todos los campos son obligatorios', 'alert alert-danger');
      return;
    } else if (userselected === user) {
      showAlert('No se realizaron modificaciones', 'alert alert-warning');
      return;
    }
    editUser(user);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center my-4">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body p-3">
                <h2 className="text-center mb-4 font-weight-bold">
                  Editar Usuario
                </h2>
                <form onSubmit={handleSubmit} className="p-3">
                  <div className="form-group">
                    <label
                      htmlFor="firstName"
                      className="col-sm-10 col-form-label"
                    >
                      Nombres
                    </label>
                    <input
                      type="text"
                      className="form-control px-3"
                      placeholder="Nombres"
                      name="firstName"
                      onChange={handleChange}
                      value={firstName}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="lastName"
                      className="col-sm-10 col-form-label"
                    >
                      Apellidos
                    </label>
                    <input
                      type="text"
                      className="form-control px-3"
                      placeholder="Apellidos"
                      name="lastName"
                      onChange={handleChange}
                      value={lastName}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="col-sm-10 col-form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control px-3"
                      placeholder="user@mail.com"
                      name="email"
                      onChange={handleChange}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="document"
                      className="col-sm-10 col-form-label"
                    >
                      DNI
                    </label>
                    <input
                      type="text"
                      className="form-control px-3"
                      placeholder="Documento de identidad"
                      name="document"
                      onChange={handleChange}
                      value={document}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="address"
                      className="col-sm-10 col-form-label"
                    >
                      Dirección
                    </label>
                    <input
                      type="text"
                      className="form-control px-3"
                      placeholder="Dirección completa"
                      name="address"
                      onChange={handleChange}
                      value={address}
                    />
                  </div>
                  {alert ? (
                    <div className={`msg-alert ${alert.category}`}>
                      {alert.msg}
                    </div>
                  ) : null}
                  <div className="form-group row m-0 mt-4">
                    {loading ? (
                      <button
                        type="button"
                        disabled
                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                      >
                        <span
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Modificando...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                      >
                        Guardar Cambios
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarUsuario;
