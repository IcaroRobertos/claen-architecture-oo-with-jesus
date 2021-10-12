import { Router } from 'express';
import { TaskController } from '@controllers/TaskController';

export const routes = Router();

// const task = new TaskController();

routes.post('/task', TaskController.create);
