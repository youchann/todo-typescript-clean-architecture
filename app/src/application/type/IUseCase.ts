export abstract class IUseCase {
  abstract execute(...param: any): Promise<any>;
}
