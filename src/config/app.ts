import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import { errorHandler } from '../middlewares/ErrorHandler';

import '../database';
import { routes } from './routes';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errorHandler);

export { app, PORT };