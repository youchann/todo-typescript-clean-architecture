import moment from 'moment';
import { Todo } from '../../entity/todo';

export class TodoSerializer {
  serialize(todo: Todo) {
    return {
      id: todo.id,
      name: todo.name,
      memo: todo.memo,
      idDone: todo.isDone,
      createdAt: moment(todo.createdAt).format('YYYY/MM/DD hh:mm:ss'),
      updatedAt: moment(todo.createdAt).format('YYYY/MM/DD hh:mm:ss'),
    };
  }
}
