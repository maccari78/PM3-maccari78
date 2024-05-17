import { Request, Response } from 'express';
import { AppointmentService } from '../services/appointmentService';

export class AppointmentController {
  private appointmentService: AppointmentService;

  constructor() {
    this.appointmentService = new AppointmentService();
  }

  async getAppointmentDetails(req: Request, res: Response) {
    const appointmentId = parseInt(req.params.id);
    const appointment = await this.appointmentService.getAppointmentDetails(appointmentId);
    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  }

  async scheduleAppointment(req: Request, res: Response) {
    const appointmentData = req.body;
    try {
      const newAppointment = await this.appointmentService.scheduleAppointment(appointmentData);
      res.status(201).json(newAppointment);
    } catch (error) {
      res.status(400).json({ message: 'Invalid data' });
    }
  }

  async cancelAppointment(req: Request, res: Response) {
    const appointmentId = parseInt(req.params.id);
    try {
      const cancelledAppointment = await this.appointmentService.cancelAppointment(appointmentId);
      if (cancelledAppointment) {
        res.json(cancelledAppointment);
      } else {
        res.status(404).json({ message: 'Appointment not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Invalid data' });
    }
  }

  async getAllAppointments(req: Request, res: Response) {
    const appointments = await this.appointmentService.getAllAppointments();
    if (appointments.length > 0) {
      res.json(appointments);
    } else {
      res.status(404).json({ message: 'No appointments found' });
    }
  }
}