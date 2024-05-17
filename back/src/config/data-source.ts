import { DataSource } from "typeorm"
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from "./envs"
import User from "../entities/User"
import Credential from "../entities/Credential"
import Appointment from "../entities/Appointment"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: Number(DB_PORT) || 5432,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    synchronize: true,
    // dropSchema: true,
    logging: ["error"],
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})

export const userModel = AppDataSource.getRepository(User)
export const credentialModel = AppDataSource.getRepository(Credential)
export const appointmentModel = AppDataSource.getRepository(Appointment)