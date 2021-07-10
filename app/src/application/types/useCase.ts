import { DbConnection } from '../../interface/types/dbConnection';

export abstract class UseCase {
  protected dbConnection: DbConnection;

  constructor(dbConnection: DbConnection) {
    this.dbConnection = dbConnection;
  }

  abstract execute(...param: any): Promise<any>;
}
