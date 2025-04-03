import React from "react";

function UserList({ users, onEdit, onDelete }) {
  return (
    <table className="user-list">
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellido Materno</th>
          <th>Apellido Paterno</th>
          <th>Edad</th>
          <th>Correo</th>
          <th>Dirección</th>
          <th>Código Postal</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.firstName}</td>
            <td>{user.motherLastName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.postalCode}</td>
            <td>
              <button onClick={() => onEdit(index)}>Editar</button>
              <button onClick={() => onDelete(index)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;

  
  

