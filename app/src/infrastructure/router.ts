import express = require('express');
import { TodoController } from '../interface/controller/todoController';
import { IDbConnection } from '../interface/type/IDbConnection';

export const createRouter = (dbConnection: IDbConnection) => {
  const router = express.Router();
  const todoController = new TodoController(dbConnection);

  router.get('/todo', async (req: express.Request, res: express.Response) => {
    const result = await todoController.list(req, res);
    res.send(result);
  });

  return router;
};
