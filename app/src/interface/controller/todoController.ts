import { CreateTodoUseCase } from '../../application/useCase/todo/createTodoUseCase';
import { DbConnection } from '../types/dbConnection';
import { ControllerRequest } from '../types/request';
import { ControllerResponse } from '../types/response';

export class TodoController {
  private dbConnection: DbConnection;
  constructor(dbConnection: DbConnection) {
    this.dbConnection = dbConnection;
  }

  async list(_req: ControllerRequest, _res: ControllerResponse) {
    const useCase = new CreateTodoUseCase(this.dbConnection);
    return useCase.execute();
  }
}
