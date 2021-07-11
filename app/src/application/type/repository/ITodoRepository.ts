import { Todo } from '../../../entity/todo';
import { IDbConnection } from '../../../interface/type/IDbConnection';

export abstract class ITodoRepository {
  protected dbConnection: IDbConnection;

  constructor(dbConnection: IDbConnection) {
    this.dbConnection = dbConnection;
  }

  abstract find(id: number): Promise<Todo>;
  abstract list(): Promise<Todo[]>;
  abstract create(todo: Todo): Promise<number>;
  abstract update(todo: Todo): Promise<number>;
  // abstract delete(todo: Todo): Promise<Todo>;
}
