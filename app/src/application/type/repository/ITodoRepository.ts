import { Todo } from '../../../entity/todo';

export abstract class ITodoRepository {
  abstract list(): Promise<Todo[]>;
  abstract find(id: number): Promise<Todo>;
  abstract update(Todo: Todo): Promise<Todo>;
  abstract delete(Todo: Todo): Promise<Todo>;
}
