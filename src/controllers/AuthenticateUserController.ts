import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

import { IAuthenticateRequest } from "../types/IAuthenticate";

class AuthenticateUserController {

  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body as IAuthenticateRequest;

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({ email, password });

    return response.json(token);
  }
}

export { AuthenticateUserController };