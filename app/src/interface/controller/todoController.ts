import { CreateTodoUseCase } from '../../application/useCase/todo/createTodoUseCase';
import { IControllerRequest } from '../type/IControllerRequest';
import { IControllerResponse } from '../type/IControllerResponse';
import { IDbConnection } from '../type/IDbConnection';

export class TodoController {
  private dbConnection: IDbConnection;
  constructor(dbConnection: IDbConnection) {
    this.dbConnection = dbConnection;
  }

  async list(_req: IControllerRequest, _res: IControllerResponse) {
    const useCase = new CreateTodoUseCase(this.dbConnection);
    return useCase.execute();
  }
}
