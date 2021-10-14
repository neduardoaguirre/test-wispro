import React from 'react';
import Header from './Header';
import { HiTrash, HiPencil } from 'react-icons/hi';

const AdminUsers = () => {
  return (
    <>
      <Header />
      <div className="table-responsive-md">
        <table className="table table-striped">
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
              <td>Juan</td>
              <td>Perez</td>
              <td>30111222</td>
              <td>Salta 123, Luján, Pcia. de Bs. As.</td>
              <td>jperez@mail.com</td>
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
      </div>
    </>
  );
};

export default AdminUsers;
