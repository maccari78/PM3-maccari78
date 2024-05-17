import { error } from 'console';
import { AppDataSource, appointmentModel, userModel } from '../config/data-source';
import Appointment from '../entities/Appointment';

export class AppointmentService {
  private appointmentRepository = AppDataSource.getRepository(Appointment);

  async getAppointmentDetails(appointmentId: number) {
    const appointment = await this.appointmentRepository.findOne({
      where: { id: appointmentId },
      relations: ['user'],
    });
    return appointment;
  }

  async scheduleAppointment(appointmentData: any) {
    const newAppointment: any = this.appointmentRepository.create(appointmentData);
    // await appointmentModel.save(appointmentData);
    
    const user: any = await userModel.findOneBy({ id: appointmentData.userId });
    
    if (!user) throw new Error("Usuario no encontrado");
    
    newAppointment.user = user;
  
    await this.appointmentRepository.save(newAppointment);
    
    return newAppointment;
  }
  

  async cancelAppointment(appointmentId: number) {
    const appointment = await this.appointmentRepository.findOne({ where: { id: appointmentId } });
    if (appointment) {
      appointment.status = 'cancelled';
      return await this.appointmentRepository.save(appointment);
    }
    return null;
  }

  async getAllAppointments() {
    return await this.appointmentRepository.find({
      relations: ['user'],
      order: { id: 'ASC' }
    });
  }
}