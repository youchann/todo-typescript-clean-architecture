import { DbConnection } from '../repository/dbConnection';
import { ControllerRequest } from './types/request';
import { ControllerResponse } from './types/response';

export class TodoController {
  private dbConnection: DbConnection;
  constructor(dbConnection: DbConnection) {
    this.dbConnection = dbConnection;
  }

  async list(_req: ControllerRequest, _res: ControllerResponse) {
    const result = await this.dbConnection.execute('select * from todo');
    // TODO: use adapter
    return result;
  }
}
// index.tsからいい感じにしていく
// 	routerを作ってみる//
// 	middleware的なのをまとめる//
// 	DBconnectionを貼ってみる
// 		DBを扱えるクラスを作ってみる
// 			まずは抽象クラスから
// 		その中に入れる
// 	controllerを作ってみる
// 		classをとりあえず書く
// 			req, resの型をどこに置くか//
// 	usecase書いていく
// 	アダプターみたいなの作る

// 実際にエンドポイント書いてみる
// 	read
// 	create
// 	update
// 	done
// 	delete
