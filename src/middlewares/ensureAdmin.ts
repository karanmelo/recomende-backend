import { Request, Response, NextFunction } from "express";

export const ensureAdmin = (request: Request, response: Response, next: NextFunction) => {
  const { user_id } = request;

  console.log(user_id);

  const admin = true;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    status: "error",
    message: "Usuário não autorizado."
  });
}