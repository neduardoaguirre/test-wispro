import React from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi';

const User = ({ user }) => {
  return (
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
  );
};

export default User;
