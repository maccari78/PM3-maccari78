import { useState } from 'react';
import axios from 'axios';
import styles from './CreateAppointmentForm.module.css';

const CreateAppointmentForm = ({ user }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        serviceId: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/appointments/schedule', {
                ...formData,
                userId: user.id,
            });
            alert("Ha creado la cita correctamente");
            setFormData({
                date: '',
                time: '',
                serviceId: '',
                description: '',
            });
        } catch (error) {
            console.error('Error creating appointment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles['form-container']}>
                <label htmlFor="date">Fecha:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="time">Hora:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="serviceId">Servicio:</label>
                <select
                    id="serviceId"
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona un Servicio</option>
                    <option value="1">Limpieza</option>
                    <option value="2">Blanqueamiento</option>
                    <option value="3">Exámenes</option>
                    <option value="4">Restauración</option>
                </select>
                <label htmlFor="description">Descripción:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <button type="submit">Crear Turno</button>
            </div>
        </form>
    );
};

export default CreateAppointmentForm;



