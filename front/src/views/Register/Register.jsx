import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/register", formData);
      console.log(response.data); 
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <div className={styles.registerCard}>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          autoComplete="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Nombre de usuario"
          required
        />
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
        />
        <input
          type="password"
          name="password"
          autoComplete="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Contraseña"
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
    </div>
  );
};

export default Register;

