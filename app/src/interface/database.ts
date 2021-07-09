import mysql from 'mysql';
import util from 'util';

export abstract class DbConnection {
  abstract execute(query: string, param?: any): any;
}

export class MysqlConnection extends DbConnection {
  private pool: mysql.Pool;

  constructor() {
    super();
    this.pool = mysql.createPool({
      connectionLimit: 5,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
    this.pool.getConnection((error: mysql.MysqlError, connection: mysql.PoolConnection) => {
      if (error) {
        switch (error.code) {
          case 'PROTOCOL_CONNECTION_LOST':
            console.error('Database connection was closed.');
          case 'ER_CON_COUNT_ERROR':
            console.error('Database has too many connections.');
          case 'ECONNREFUSED':
            console.error('Database connection was refused.');
          default:
            console.error('Database connection error accured.');
            console.error(error);
        }
      }
      if (connection) connection.release();
    });
    this.pool.query = util.promisify(this.pool.query) as any;
    this.pool.on('connection', (connection: any) => {
      console.log('mysql connection create');
    });
    this.pool.on('release', (connection: any) => {
      console.log('Connection %d released', connection.threadId);
    });
  }

  async execute(query: string, params: any = null) {
    if (params !== null) {
      return this.pool.query(query, params);
    } else {
      return this.pool.query(query);
    }
  }
}
