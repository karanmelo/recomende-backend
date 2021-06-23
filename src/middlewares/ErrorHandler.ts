import { Request, Response, NextFunction } from 'express';

export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return response.status(400).json({
      status: 'error',
      message: error.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Erro interno no servidor.'
  });
}