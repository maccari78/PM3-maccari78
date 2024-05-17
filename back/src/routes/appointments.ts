import express from 'express';
import { AppointmentController } from '../controllers/appointmentsController';
import { catchAsync } from '../middleware';

const router = express.Router();
const appointmentController = new AppointmentController();

router.get('/:id', catchAsync(appointmentController.getAppointmentDetails.bind(appointmentController)));
router.post('/schedule', catchAsync(appointmentController.scheduleAppointment.bind(appointmentController)));
router.put('/cancel/:id', catchAsync(appointmentController.cancelAppointment.bind(appointmentController)));
router.get('/', catchAsync(appointmentController.getAllAppointments.bind(appointmentController)));

export default router;