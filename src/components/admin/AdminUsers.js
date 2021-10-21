import React, { useContext, useEffect } from 'react';
import Header from './Header';
import User from './User';

import userContext from '../../context/users/userContext';

const AdminUsers = () => {
  const usersContext = useContext(userContext);
  const { users, getUsers, loading, message } = usersContext;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="table-responsive-lg">
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Nombres</th>
              <th scope="col">Apellido</th>
              <th scope="col">DNI</th>
              <th scope="col">Dirección</th>
              <th scope="col">Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {loading ? (
            <caption className="p-0">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '100%' }}
                ></div>
              </div>
            </caption>
          ) : users.length > 0 ? (
            users.map((user) => <User key={user._id} user={user} />)
          ) : message ? (
            <caption className="p-0">
              <p className="alert alert-danger text-center">{message}</p>
            </caption>
          ) : (
            <caption className="p-0">
              <p className="alert alert-warning text-center">
                No hay usuarios registrados
              </p>
            </caption>
          )}
        </table>
      </div>
    </>
  );
};

export default AdminUsers;
