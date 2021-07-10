import { IDbConnection } from '../../../interface/type/IDbConnection';
import { IUseCase } from '../../type/IUseCase';
import { ITodoRepository } from '../../type/repository/ITodoRepository';

export class CreateTodoUseCase extends IUseCase {
  protected todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    super();
    this.todoRepository = todoRepository;
  }

  async execute() {
    const result = await this.todoRepository.list();
    return result;
  }
}
