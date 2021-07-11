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

  private getDoneValue(isDone: boolean) {
    return isDone ? 1 : 0;
  }

  async find(id: number) {
    const result = await this.dbConnection.execute('select * from todo where id = ?', [id]);
    return this.mapToEntity(result[0]);
  }

  async list() {
    const result = await this.dbConnection.execute<any[]>('select * from todo');
    return result.map((r) => this.mapToEntity(r));
  }

  async create(todo: Todo) {
    const result = await this.dbConnection.execute(
      'insert into todo(name,memo,is_done) values (?,?,?)',
      [todo.name, todo.memo, this.getDoneValue(todo.isDone)]
    );
    return result.insertId;
  }

  async update(todo: Todo) {
    await this.dbConnection.execute(
      'update todo set name = ?, memo = ?, is_done = ? where id = ?',
      [todo.name, todo.memo, this.getDoneValue(todo.isDone), todo.id as number]
    );
    return todo.id as number;
  }

  async delete(id: number) {
    await this.dbConnection.execute('delete from todo where id = ?', [id]);
    return id;
  }
}
