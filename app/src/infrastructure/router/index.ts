import express = require('express');
import { IDbConnection } from '../../interface/type/IDbConnection';
import { createTodoRouter } from './todoRouter';

export const createRouter = (dbConnection: IDbConnection) => {
  const router = express.Router();
  router.use('/todo', createTodoRouter(dbConnection));
  return router;
};
