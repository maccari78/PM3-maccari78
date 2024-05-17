import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from './Login.module.css';
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/users/login", formData)
      .then(r => {
        dispatch(setUserData(r.data));
        navigate("/")
      })
      .catch((error) =>
        alert(error)
      );
  };

  return (
    <div className={styles.loginCard}>
      <h2>Iniciar Sesión</h2>
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
          type="password"
          name="password"
          autoComplete="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Contraseña"
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿Aún no tienes una cuenta? <Link to="/register">Registrarse</Link></p>
    </div>
  );
};

export default Login;


