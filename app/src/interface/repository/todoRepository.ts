import { ITodoRepository } from '../../application/type/repository/ITodoRepository';
import { Todo } from '../../entity/todo';

export class TodoRepository extends ITodoRepository {
  private mapToEntity(row: any) {
    return new Todo({
      id: row.id,
      name: row.name,
      memo: row?.memo,
      isDone: row.is_done,
      createdAt: new Date(row.created_at),
      updatedAt: row.updated_at ? new Date(row.updated_at) : undefined,
    });
  }

  async list() {
    const result = await this.dbConnection.execute<any[]>('select * from todo');
    return result.map((r) => this.mapToEntity(r));
  }
}
