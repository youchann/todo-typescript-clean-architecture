export abstract class DbConnection {
  abstract execute(query: string, param?: (string | number)[]): Promise<any>;
}
