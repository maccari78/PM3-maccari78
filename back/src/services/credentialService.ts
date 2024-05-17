import { credentialModel, userModel } from '../config/data-source';
import User from '../entities/User';
import { Credential } from '../models/credentialModel';

export const credentialService = {
    createCredential: async (username: string, password: string): Promise<Credential> => {
        const resp = credentialModel.create({ username, password })
        const newCredential = await credentialModel.save(resp)
        console.log(newCredential);
        return newCredential
    },

    validateCredentials: (username: string, password: string): number | null => {
        return null;
    },

    loginUser: async (username: string, password: string): Promise<User> => {
        const credential = await credentialModel.findOne({
            where: { username }
        });

        if (!credential || credential.password !== password) {
            throw ("usuario o contraseña incorrecta");
        }

        const user = await userModel.findOne({ where: { credentialId: credential } })
        if (!user) {
            throw ("usuario o contraseña incorrecta");
        }
        return user;
    }
};
