import { ITodoRepository } from '../../application/type/repository/ITodoRepository';
import { CreateTodoUseCase } from '../../application/useCase/todo/createTodoUseCase';
import { TodoRepository } from '../repository/todoRepository';
import { IControllerRequest } from '../type/IControllerRequest';
import { IControllerResponse } from '../type/IControllerResponse';
import { IDbConnection } from '../type/IDbConnection';

export class TodoController {
  private todoRepository: ITodoRepository;
  constructor(dbConnection: IDbConnection) {
    this.todoRepository = new TodoRepository(dbConnection);
  }

  async list(_req: IControllerRequest, _res: IControllerResponse) {
    const useCase = new CreateTodoUseCase(this.todoRepository);
    return useCase.execute();
  }
}
