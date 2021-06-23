import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

import { IUser } from '../types/IUserType';

class UsersController {
  async create(request: Request, response: Response) {
    const { name, email, password, admin } = request.body as IUser;

    const usersService = new UsersService();
    const user = await usersService.create({ name, email, password, admin });

    response.status(201).json({
      status: "ok",
      data: user
    });
  }
}

export { UsersController };