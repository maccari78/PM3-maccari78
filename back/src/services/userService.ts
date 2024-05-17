import { UserDto } from '../Dto/UserDto';
import { userModel } from '../config/data-source';
import Credential from '../entities/Credential';
import User from '../entities/User';

// import { getRepository } from 'typeorm';
// import Credential from '../entities/Credential';

// export class UserService {
//   private userRepository = AppDataSource.getRepository(User);
//   private credentialRepository = AppDataSource.getRepository(Credential);

//   async getUserWithAppointments(userId: number) {
//     const user = await this.userRepository.findOne({
//       where: { id: userId },
//       relations: ['appointments'],
//     });
//     return user;
//   }

//   async registerUser(userData: any) {
//     const newUser = this.userRepository.create(userData);
//     return await this.userRepository.save(newUser);
//   }

//   async getCredentialIdByUsername(username: string): Promise<number | null> {
//     try {
//       const credential = await getRepository(Credential).findOne({ where: { username }, relations: { user: true } });
//       console.log(credential)
//       return credential ? credential.id : null;
//     } catch (error) {
//       console.error("Error al obtener el ID de la credencial:", error);
//       return null;
//     }
//   }

//   async loginUser(username: string, password: string) {
//     try {
//       const credential = await this.credentialRepository.findOne({
//         where: { username, password }
//       });

//       if (!credential) {
//         return null;
//       }

//       return credential.username;
//     } catch (error) {
//       return null;
//     }
//   }
// }

export const userService = {
  createUser: async ({ name, email, birthdate, nDni, credentialId }: UserDto): Promise<User> => {
    const resp = userModel.create({ name, email, birthdate, nDni, credentialId })
    const newUser = await userModel.save(resp)
    console.log(newUser);
    return newUser
  },

  getAllUsers: async () => {
    return await userModel.find();
  },

  getUserWithAppointments:async(userId: number) =>{
    const user = await userModel.findOne({
      where: { id: userId },
      relations: ['appointments'],
    });
    return user;
  }
}