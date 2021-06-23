import { Request, Response, NextFunction } from "express";

export const ensureAdmin = (request: Request, response: Response, next: NextFunction) => {
  const admin = false;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    status: "error",
    message: "Usuário não autorizado."
  });
}