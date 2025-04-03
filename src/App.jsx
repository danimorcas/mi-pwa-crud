import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    edad: "",
    correo: "",
    direccion: "",
    codigoPostal: "",
    genero: "",
  });

  const [usuarios, setUsuarios] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [errors, setErrors] = useState({});

  // Cargar usuarios del localStorage al iniciar
  useEffect(() => {
    const savedUsers = localStorage.getItem('usuarios');
    if (savedUsers) {
      setUsuarios(JSON.parse(savedUsers));
    }
  }, []);

  // Guardar usuarios en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Nombre es requerido";
    if (!formData.apellidoPaterno.trim()) newErrors.apellidoPaterno = "Apellido paterno es requerido";
    if (!formData.edad) newErrors.edad = "Edad es requerida";
    if (!formData.genero) newErrors.genero = "Género es requerido";
    if (!formData.correo.trim()) {
      newErrors.correo = "Correo es requerido";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.correo)) {
      newErrors.correo = "Correo no válido";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isEditing) {
      const updatedUsers = [...usuarios];
      updatedUsers[currentIndex] = formData;
      setUsuarios(updatedUsers);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setUsuarios([...usuarios, formData]);
    }
    
    setFormData({
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      edad: "",
      correo: "",
      direccion: "",
      codigoPostal: "",
      genero: "",
    });
    setErrors({});
  };

  const handleEdit = (index) => {
    setFormData(usuarios[index]);
    setIsEditing(true);
    setCurrentIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (index) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      const updatedUsers = usuarios.filter((_, i) => i !== index);
      setUsuarios(updatedUsers);
      if (isEditing && currentIndex === index) {
        setIsEditing(false);
        setCurrentIndex(null);
        setFormData({
          nombre: "",
          apellidoPaterno: "",
          apellidoMaterno: "",
          edad: "",
          correo: "",
          direccion: "",
          codigoPostal: "",
          genero: "",
        });
      }
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>{isEditing ? "Editar Usuario" : "Registrar Nuevo Usuario"}</h2>
        
        <form onSubmit={handleSubmit} className="user-form" noValidate>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="nombre">Nombres*</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className={errors.nombre ? "error" : ""}
                placeholder="Ej. Juan Carlos"
              />
              {errors.nombre && <span className="error-message">{errors.nombre}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="apellidoPaterno">Apellido Paterno*</label>
              <input
                type="text"
                id="apellidoPaterno"
                name="apellidoPaterno"
                value={formData.apellidoPaterno}
                onChange={handleInputChange}
                className={errors.apellidoPaterno ? "error" : ""}
                placeholder="Ej. Pérez"
              />
              {errors.apellidoPaterno && <span className="error-message">{errors.apellidoPaterno}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="apellidoMaterno">Apellido Materno</label>
              <input
                type="text"
                id="apellidoMaterno"
                name="apellidoMaterno"
                value={formData.apellidoMaterno}
                onChange={handleInputChange}
                placeholder="Ej. López"
              />
            </div>

            <div className="form-group">
              <label htmlFor="edad">Edad*</label>
              <input
                type="number"
                id="edad"
                name="edad"
                value={formData.edad}
                onChange={handleInputChange}
                min="1"
                max="120"
                className={errors.edad ? "error" : ""}
                placeholder="Ej. 25"
              />
              {errors.edad && <span className="error-message">{errors.edad}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="genero">Género*</label>
              <select
                id="genero"
                name="genero"
                value={formData.genero}
                onChange={handleInputChange}
                className={errors.genero ? "error" : ""}
              >
                <option value="">Seleccione...</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
              {errors.genero && <span className="error-message">{errors.genero}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico*</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                className={errors.correo ? "error" : ""}
                placeholder="ejemplo@email.com"
              />
              {errors.correo && <span className="error-message">{errors.correo}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                placeholder="Calle, número, ciudad"
              />
            </div>

            <div className="form-group">
              <label htmlFor="codigoPostal">Código Postal</label>
              <input
                type="text"
                id="codigoPostal"
                name="codigoPostal"
                value={formData.codigoPostal}
                onChange={handleInputChange}
                placeholder="Ej. 12345"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              {isEditing ? "Actualizar Usuario" : "Registrar Usuario"}
            </button>
            {isEditing && (
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setIsEditing(false);
                  setFormData({
                    nombre: "",
                    apellidoPaterno: "",
                    apellidoMaterno: "",
                    edad: "",
                    correo: "",
                    direccion: "",
                    codigoPostal: "",
                    genero: "",
                  });
                  setErrors({});
                }}
              >
                Cancelar Edición
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="user-list-container">
        <h2>Lista de Usuarios</h2>
        {usuarios.length === 0 ? (
          <p className="no-users">No hay usuarios registrados aún.</p>
        ) : (
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Nombres</th>
                  <th>Apellido Paterno</th>
                  <th className="hide-on-mobile">Apellido Materno</th>
                  <th>Edad</th>
                  <th>Género</th>
                  <th className="hide-on-mobile">Correo</th>
                  <th className="hide-on-mobile">Dirección</th>
                  <th className="hide-on-mobile">Código Postal</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario, index) => (
                  <tr key={index}>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellidoPaterno}</td>
                    <td className="hide-on-mobile">{usuario.apellidoMaterno || "-"}</td>
                    <td>{usuario.edad}</td>
                    <td>{usuario.genero}</td>
                    <td className="hide-on-mobile">{usuario.correo}</td>
                    <td className="hide-on-mobile">{usuario.direccion || "-"}</td>
                    <td className="hide-on-mobile">{usuario.codigoPostal || "-"}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn edit-btn" onClick={() => handleEdit(index)}>
                          Editar
                        </button>
                        <button className="action-btn delete-btn" onClick={() => handleDelete(index)}>
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;