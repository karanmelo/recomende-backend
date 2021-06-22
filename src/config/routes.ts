import { Router, Request, Response } from 'express';

import { UsersController } from '../controllers/UsersController';

const routes = Router();

const usersController = new UsersController();

routes.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Seja Bem-vindo à API do Recomende</h1>');
});

routes.post('/user', usersController.create);

export { routes };