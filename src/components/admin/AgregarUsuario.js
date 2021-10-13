import React, { useState } from 'react';
import Header from './Header';

const AgregarUsuario = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    document: '',
    address: '',
  });
  const { firstName, lastName, email, document, address } = user;

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
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center my-4">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center mb-4 font-weight-bold">
                  Nuevo Usuario
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group px-3">
                    <label
                      htmlFor="firstName"
                      className="col-sm-10 col-form-label"
                    >
                      Nombres
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombres"
                      name="firstName"
                      onChange={handleChange}
                      value={firstName}
                    />
                  </div>
                  <div className="form-group px-3">
                    <label
                      htmlFor="lastName"
                      className="col-sm-10 col-form-label"
                    >
                      Apellidos
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellidos"
                      name="lastName"
                      onChange={handleChange}
                      value={lastName}
                    />
                  </div>
                  <div className="form-group px-3">
                    <label htmlFor="email" className="col-sm-10 col-form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="user@mail.com"
                      name="email"
                      onChange={handleChange}
                      value={email}
                    />
                  </div>
                  <div className="form-group px-3">
                    <label
                      htmlFor="document"
                      className="col-sm-10 col-form-label"
                    >
                      DNI
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Documento de identidad"
                      name="document"
                      onChange={handleChange}
                      value={document}
                    />
                  </div>
                  <div className="form-group px-3">
                    <label
                      htmlFor="address"
                      className="col-sm-10 col-form-label"
                    >
                      Dirección
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Dirección completa"
                      name="address"
                      onChange={handleChange}
                      value={address}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                  >
                    Agregar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgregarUsuario;
