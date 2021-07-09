export abstract class DbConnection {
  abstract execute(query: string, param?: any): any;
}
