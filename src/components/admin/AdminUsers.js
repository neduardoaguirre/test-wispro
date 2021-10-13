import React from 'react';
import Header from './Header';
import { HiTrash, HiPencil } from 'react-icons/hi';

const AdminUsers = () => {
  return (
    <>
      <Header />
      <table className="table table-striped table-responsive-lg">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombres</th>
            <th scope="col">Apellido</th>
            <th scope="col">DNI</th>
            <th scope="col">Dirección</th>
            <th scope="col">Email</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lionel Andrés</td>
            <td>Messi</td>
            <td>38555123</td>
            <td>Perón 3521, Rosario</td>
            <td>leomessi@mail.com</td>
            <td>
              <button type="button" className="btn btn-info btn-sm rounded">
                <HiPencil />
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-danger btn-sm rounded">
                <HiTrash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdminUsers;
