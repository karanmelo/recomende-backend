import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

import { IUser } from '../types/IUserType';

class UsersController {
  async create(request: Request, response: Response) {
    const { name, email, password, admin } = request.body as IUser;

    const usersService = new UsersService();

    try {
      const user = await usersService.create({ name, email, password, admin });

      response.status(201).json({
        status: "ok",
        data: user
      });
    } catch (error) {
      response.status(400).json({
        status: "error",
        data: error.message
      });
    }
  }
}

export { UsersController };