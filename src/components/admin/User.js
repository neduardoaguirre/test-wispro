import React from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi';

const User = ({ user }) => {
  const { _id, firstName, lastName, document, address, email } = user;

  return (
    <tbody>
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{document}</td>
        <td>{address}</td>
        <td>{email}</td>
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
