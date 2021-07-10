import { DbConnection } from '../../../interface/types/dbConnection';
import { UseCase } from '../../types/useCase';

export class CreateTodoUseCase extends UseCase {
  constructor(dbConnection: DbConnection) {
    super(dbConnection);
  }

  async execute() {
    const result = await this.dbConnection.execute('select * from todo');
    return result;
  }
}
