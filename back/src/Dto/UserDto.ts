import Credential from "../entities/Credential";

export interface UserDto { name: string; email: string; birthdate: string; nDni: string; credentialId: Credential; }