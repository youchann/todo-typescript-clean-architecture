import express from 'express';
import { createRouter } from './infrastructure/router';
import { MysqlConnection } from './infrastructure/database';

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MEMO: CROS対応（というか完全無防備：本番環境ではだめ絶対）
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(createRouter(new MysqlConnection()));

app.listen(3000, () => {
  console.log('Start on port 3000.');
});
