export abstract class IDbConnection {
  abstract execute(query: string, param?: (string | number)[]): Promise<any>;
}
