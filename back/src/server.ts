import express from 'express';
import dotenv from 'dotenv';
import usersRouter from './routes/users';
import appointmentsRouter from './routes/appointments';
import cors from 'cors';

dotenv.config();

const server = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};
server.use(cors(corsOptions));

server.use(express.json());

server.use('/users', usersRouter);
server.use('/appointments', appointmentsRouter);

export default server;



