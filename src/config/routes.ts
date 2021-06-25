import { Router, Request, Response } from 'express';

import { UsersController } from '../controllers/UsersController';
import { TagsController } from '../controllers/TagsController';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const routes = Router();

const usersController = new UsersController();
const tagsController = new TagsController();
const authenticateUserController = new AuthenticateUserController();

routes.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Seja Bem-vindo à API do Recomende</h1>');
});

routes.post('/users', usersController.create);

routes.post('/tags', ensureAdmin, tagsController.create);

routes.post('/auth', authenticateUserController.authenticate);

export { routes };