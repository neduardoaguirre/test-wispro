import React, { useContext } from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi';
import userContext from '../../context/users/userContext';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

const User = ({ user }) => {
  const usersContext = useContext(userContext);
  const { getUserToEdit, deleteUser } = usersContext;

  const history = useHistory();

  const { _id, firstName, lastName, document, address, email } = user;

  const userToDelete = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡El usuario no se podrá recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, ¡Eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(_id);
      }
    });
  };

  const editUser = () => {
    getUserToEdit(user);
    history.push(`/admin-users/editar/${_id}`);
  };

  return (
    <tbody>
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{document}</td>
        <td>{address}</td>
        <td>{email}</td>
        <td>
          <span data-tooltip="Editar">
            <button
              type="button"
              className="btn btn-info btn-sm rounded"
              onClick={editUser}
            >
              <HiPencil />
            </button>
          </span>
        </td>
        <td>
          <span data-tooltip="Eliminar">
            <button
              type="button"
              className="btn btn-danger btn-sm rounded"
              onClick={userToDelete}
            >
              <HiTrash />
            </button>
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default User;
