import { IDbConnection } from '../../../interface/type/IDbConnection';
import { IUseCase } from '../../type/IUseCase';

export class CreateTodoUseCase extends IUseCase {
  protected dbConnection: IDbConnection;

  constructor(dbConnection: IDbConnection) {
    super();
    this.dbConnection = dbConnection;
  }

  async execute() {
    const result = await this.dbConnection.execute('select * from todo');
    return result;
  }
}
