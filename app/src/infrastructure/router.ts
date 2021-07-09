import express = require('express');
import { DbConnection } from '../interface/repository/dbConnection';

export const createRouter = (dbConnection: DbConnection) => {
  let router = express.Router();
  router.get('/todo', async (req: express.Request, res: express.Response) => {
    const hoge = await dbConnection.execute('select * from todo');
    hoge.map((h: any) => console.log(h.id));
    res.send('hoge');
  });
  return router;
};
