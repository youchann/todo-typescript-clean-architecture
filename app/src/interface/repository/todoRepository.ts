import { ITodoRepository } from '../../application/type/repository/ITodoRepository';
import { Todo } from '../../entity/todo';

export class TodoRepository extends ITodoRepository {
  private mapToEntity(row: any) {
    return new Todo({
      id: row.id,
      name: row.name,
      memo: row?.memo,
      isDone: row.is_done === 1,
      createdAt: new Date(row.created_at),
      updatedAt: row.updated_at ? new Date(row.updated_at) : undefined,
    });
  }

  async list() {
    const result = await this.dbConnection.execute<any[]>('select * from todo');
    return result.map((r) => this.mapToEntity(r));
  }

  async create(todo: Todo) {
    const result = await this.dbConnection.execute(
      'insert into todo(name,memo,is_done) values (?,?,?)',
      [todo.name, todo.memo, todo.isDone ? 1 : 0]
    );
    return new Todo({
      id: result.insertId,
      name: todo.name,
      memo: todo.memo,
      isDone: todo.isDone,
      createdAt: new Date(),
    });
  }
}
