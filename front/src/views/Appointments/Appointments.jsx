import { useEffect, useState } from 'react';
import axios from 'axios';
import Appointment from '../../components/Appointment/Appointment';
import { useDispatch, useSelector } from 'react-redux'; 
import styles from './Appointments.module.css';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.actualUser.userData);

  useEffect(() => {
    if (user) { 
      axios.get(`http://localhost:3000/users/${user.id}`) 
        .then(response => {
          setAppointments(response.data.appointments);
          console.log(response.data.appointments);
        })
        .catch(error => {
          console.error('Error fetching appointments:', error);
        });
    }
  }, [user]);

  const handleCancelAppointment = (id) => {
    const confirmCancel = window.confirm('¿Está seguro que desea cancelar este turno?');
    if (confirmCancel) {
      axios.put(`http://localhost:3000/appointments/${appointmentId}`)
        .then(() => {
          dispatch(setAppointments(appointments.filter(appointment => appointment.id !== id)));
          alert('Turno cancelado exitosamente');
        })
        .catch(error => {
          console.error('Error cancelling appointment:', error);
          alert('Error al cancelar el turno');
        });
    }
  };

  return (
    <div>
      <div className={styles['appointment-list']}>
        {appointments.map(appointment => (
          <Appointment
            key={appointment.id}
            id={appointment.id}
            date={appointment.date}
            time={appointment.time}
            status={appointment.status}
            description={appointment.description}
            user={appointment.user}
            onCancel={() => handleCancelAppointment(appointment.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Appointments;

