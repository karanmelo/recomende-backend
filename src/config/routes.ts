import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Seja bem vindo</h1>');
});

export { routes };