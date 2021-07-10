import { Todo } from '../../../entity/todo';
import { IDbConnection } from '../../../interface/type/IDbConnection';

export abstract class ITodoRepository {
  protected dbConnection: IDbConnection;

  constructor(dbConnection: IDbConnection) {
    this.dbConnection = dbConnection;
  }

  abstract list(): Promise<Todo[]>;
  abstract create(todo: Todo): Promise<Todo>;
  // abstract find(id: number): Promise<Todo>;
  // abstract update(todo: Todo): Promise<Todo>;
  // abstract delete(todo: Todo): Promise<Todo>;
}
