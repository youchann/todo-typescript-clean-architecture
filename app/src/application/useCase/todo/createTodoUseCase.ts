import { Todo } from '../../../entity/todo';
import { IUseCase } from '../../type/IUseCase';
import { ITodoRepository } from '../../type/repository/ITodoRepository';

export class CreateTodoUseCase extends IUseCase {
  protected todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    super();
    this.todoRepository = todoRepository;
  }

  async execute(todo: Todo) {
    const result = await this.todoRepository.create(todo);
    return result;
  }
}
