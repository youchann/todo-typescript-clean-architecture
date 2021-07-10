export abstract class IDbConnection {
  abstract execute<T = any>(query: string, param?: (string | number)[]): Promise<T>;
}
