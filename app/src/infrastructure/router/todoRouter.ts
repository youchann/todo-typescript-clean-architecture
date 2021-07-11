import express from 'express';
import { TodoController } from '../../interface/controller/todoController';
import { IDbConnection } from '../../interface/type/IDbConnection';

export const createTodoRouter = (dbConnection: IDbConnection) => {
  const router = express.Router();
  const todoController = new TodoController(dbConnection);

  router.get('/', async (req: express.Request, res: express.Response) => {
    const result = await todoController.list(req, res);
    res.send(result);
  });

  router.post('/', async (req: express.Request, res: express.Response) => {
    const result = await todoController.create(req, res);
    res.send(result);
  });

  router.get('/:id', async (req: express.Request, res: express.Response) => {
    const result = await todoController.find(req, res);
    res.send(result);
  });

  router.put('/:id', async (req: express.Request, res: express.Response) => {
    const result = await todoController.update(req, res);
    res.send(result);
  });

  return router;
};
