import { Todo } from '../../../entity/todo';
import { IUseCase } from '../../type/IUseCase';
import { ITodoRepository } from '../../type/repository/ITodoRepository';

export class UpdateTodoUseCase extends IUseCase {
  protected todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    super();
    this.todoRepository = todoRepository;
  }

  async execute(todo: Todo) {
    const id = await this.todoRepository.update(todo);
    const result = await this.todoRepository.find(id);
    return result;
  }
}
