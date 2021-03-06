import { Router, Request, Response } from 'express';

import { UsersController } from '../controllers/UsersController';
import { TagsController } from '../controllers/TagsController';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';
import { ComplimentsController } from '../controllers/ComplimentsController';
import { ListUserSenderComplimentsController } from '../controllers/ListUserSenderComplimentsController';
import { ListUserReceiverComplimentsController } from '../controllers/ListUserReceiverComplimentsController';
import { ListTagsController } from '../controllers/ListTagsController';
import { ListUsersController } from '../controllers/ListUsersController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

const usersController = new UsersController();
const tagsController = new TagsController();
const authenticateUserController = new AuthenticateUserController();
const complimnetsController = new ComplimentsController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

routes.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Seja Bem-vindo à API do Recomende</h1>');
});

routes.post('/users', ensureAuthenticated, usersController.create);
routes.get('/users', ensureAuthenticated, listUsersController.handle);

routes.post('/tags', ensureAuthenticated, ensureAdmin, tagsController.create);
routes.get('/tags', ensureAuthenticated, ensureAdmin, listTagsController.handle);

routes.post('/auth', authenticateUserController.authenticate);

routes.post('/compliments', ensureAuthenticated, complimnetsController.create);

routes.get('/users/compliments/send', ensureAuthenticated, listUserSenderComplimentsController.handle);
routes.get('/users/compliments/receiver', ensureAuthenticated, listUserReceiverComplimentsController.handle);

export { routes };