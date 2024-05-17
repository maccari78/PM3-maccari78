import { Request, Response } from 'express';
import { userService } from '../services/userService';

import { credentialService } from '../services/credentialService';
import { credentialModel, userModel } from '../config/data-source';
import User from '../entities/User';
import Credential from '../entities/Credential';


export class UserController {
  // private userService: UserService;

  // constructor() {
  //   this.userService = new UserService();
  // }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getUserWithAppointments(req: Request, res: Response) {
    const userId = parseInt(req.params.id);
    try {
      const user = await userService.getUserWithAppointments(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async registerUser(req: Request, res: Response) {
    // const userData = req.body;
    const { username, password, name, email, birthdate, nDni } = req.body
    try {
      const credentialId: Credential = await credentialService.createCredential(username, password)
      console.log(credentialId);

      const newUser: User = await userService.createUser({ name, email, birthdate, nDni, credentialId });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: 'Invalid data' });
    }
  }

  async loginUser(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const user = await credentialService.loginUser(username, password);

      // if (user) {
      //   const credentialId = await this.userService.getCredentialIdByUsername(username);
      //   res.json({ login: true, user: { id: credentialId, username } });
      // } else {
      //   res.status(400).json({ message: 'Invalid credentials' });
      // }
      console.log(user);
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
