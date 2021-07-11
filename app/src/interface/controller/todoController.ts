import { ITodoRepository } from '../../application/type/repository/ITodoRepository';
import { CreateTodoUseCase } from '../../application/useCase/todo/createTodoUseCase';
import { ListTodoUseCase } from '../../application/useCase/todo/listTodoUseCase';
import { UpdateTodoUseCase } from '../../application/useCase/todo/updateTodoUseCase';
import { FindTodoUseCase } from '../../application/useCase/todo/findTodoUseCase';
import { DeleteTodoUseCase } from '../../application/useCase/todo/deleteTodoUseCase';
import { Todo } from '../../entity/todo';
import { TodoRepository } from '../repository/todoRepository';
import { TodoSerializer } from '../serializer/todoSerializer';
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

  async find(req: IControllerRequest, _res: IControllerResponse) {
    const { id } = req.params;
    const useCase = new FindTodoUseCase(this.todoRepository);
    const result = await useCase.execute(id);
    return this.todoSerializer.serialize(result);
  }

  async list(_req: IControllerRequest, _res: IControllerResponse) {
    const useCase = new ListTodoUseCase(this.todoRepository);
    const result = await useCase.execute();
    return result.map((r) => this.todoSerializer.serialize(r));
  }

  async create(req: IControllerRequest, _res: IControllerResponse) {
    // TODO: validate params
    const { name, memo, isDone } = req.body;
    const todo = new Todo({ name, memo, isDone });
    const useCase = new CreateTodoUseCase(this.todoRepository);
    const result = await useCase.execute(todo);
    return this.todoSerializer.serialize(result);
  }

  async update(req: IControllerRequest, _res: IControllerResponse) {
    // TODO: validate params
    const { id } = req.params;
    const { name, memo, isDone } = req.body;
    const todo = new Todo({ id, name, memo, isDone });
    const useCase = new UpdateTodoUseCase(this.todoRepository);
    const result = await useCase.execute(todo);
    return this.todoSerializer.serialize(result);
  }

  async delete(req: IControllerRequest, _res: IControllerResponse) {
    // TODO: validate params
    const { id } = req.params;
    const useCase = new DeleteTodoUseCase(this.todoRepository);
    const result = await useCase.execute(id);
    return result;
  }
}
