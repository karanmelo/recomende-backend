import { Router, Request, Response } from 'express';

import { UsersController } from '../controllers/UsersController';
import { TagsController } from '../controllers/TagsController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const routes = Router();

const usersController = new UsersController();
const tagsController = new TagsController();

routes.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Seja Bem-vindo à API do Recomende</h1>');
});

routes.post('/users', usersController.create);

routes.post('/tags', ensureAdmin, tagsController.create);

export { routes };