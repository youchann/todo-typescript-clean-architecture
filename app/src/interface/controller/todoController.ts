import { ITodoRepository } from '../../application/type/repository/ITodoRepository';
import { CreateTodoUseCase } from '../../application/useCase/todo/createTodoUseCase';
import { TodoRepository } from '../repository/todoRepository';
import { TodoSerializer } from '../selializer/todoSerializer';
import { IControllerRequest } from '../type/IControllerRequest';
import { IControllerResponse } from '../type/IControllerResponse';
import { IDbConnection } from '../type/IDbConnection';

export class TodoController {
  private todoRepository: ITodoRepository;
  private todoSerializer: TodoSerializer;
  constructor(dbConnection: IDbConnection) {
    this.todoSerializer = new TodoSerializer();
    this.todoRepository = new TodoRepository(dbConnection);
  }

  async list(_req: IControllerRequest, _res: IControllerResponse) {
    const useCase = new CreateTodoUseCase(this.todoRepository);
    const result = await useCase.execute();
    return result.map((r) => this.todoSerializer.serialize(r));
  }
}
