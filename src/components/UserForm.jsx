import { useState, useEffect } from "react";

function UserForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    motherLastName: "",
    age: "",
    email: "",
    address: "",
    postalCode: "",
  });

  // Si hay datos iniciales (es decir, estamos editando un usuario), cargamos esos datos en el formulario
  useEffect(() => {
    if (initialData) {
      setFormData({
        firstName: initialData.firstName,
        lastName: initialData.lastName,
        motherLastName: initialData.motherLastName,
        age: initialData.age,
        email: initialData.email,
        address: initialData.address,
        postalCode: initialData.postalCode,
      });
    }
  }, [initialData]);

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Llamamos a la función de envío con los datos del formulario
    setFormData({
      firstName: "",
      lastName: "",
      motherLastName: "",
      age: "",
      email: "",
      address: "",
      postalCode: "",
    }); // Limpiamos el formulario después de enviar
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label htmlFor="firstName">Nombres:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Apellido Paterno:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="motherLastName">Apellido Materno:</label>
        <input
          type="text"
          id="motherLastName"
          name="motherLastName"
          value={formData.motherLastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Edad:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="postalCode">Código Postal:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-btn">
        {initialData ? "Actualizar Usuario" : "Registrar Usuario"}
      </button>
    </form>
  );
}

export default UserForm;
