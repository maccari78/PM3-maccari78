import { getRepository } from 'typeorm'; 
import Appointment from '../entities/Appointment'; 

export async function getAppointmentsByUserId(userId) {
  const appointmentRepository = getRepository(Appointment);
  return await appointmentRepository.find({ where: { userId } });
}

