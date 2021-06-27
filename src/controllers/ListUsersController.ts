import { Response, Request } from "express";

import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {

  async handle(request: Request, response: Response) {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    return response.status(200).json({
      status: "ok",
      data: users
    });
  }

}

export { ListUsersController };