import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayolad {
  sub: string;
}

export const ensureAuthenticated = (request: Request, response: Response, next: NextFunction) => {
  const auth = request.headers.authorization;

  if (!auth) {
    return response.status(401).json({
      status: "error",
      message: "Token não informado."
    });
  }

  const [, token] = auth.split(" ");

  try {
    const { sub } = verify(token, "f918e16d66570bdefe05f53d2fa9e257") as IPayolad;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      status: "error",
      message: "Usuário não autorizado."
    });
  }
}