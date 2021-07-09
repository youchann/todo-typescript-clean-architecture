export type TodoEntityPayload = {
  id?: number;
  name: string;
  memo?: string;
  isDone?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export class Todo {
  private readonly _id: number | null;
  private _name: string;
  private _memo: string;
  private _isDone: boolean;
  private _createdAt: Date | null;
  private _updatedAt: Date | null;

  constructor(payload: TodoEntityPayload) {
    this._id = payload.id || null;
    this._name = payload.name;
    this._memo = payload.memo || '';
    this._isDone = payload.isDone || false;
    this._createdAt = payload.createdAt || new Date();
    this._updatedAt = payload.updatedAt || null;
  }

  public get id() {
    return this._id;
  }
  public get name() {
    return this._name;
  }
  public get memo() {
    return this._memo;
  }
  public get isDone() {
    return this._isDone;
  }
  public get createdAt() {
    return this._createdAt;
  }
  public get updatedAt() {
    return this._updatedAt;
  }

  public set name(name: string) {
    this._name = name;
  }
  public set memo(memo: string) {
    this._memo = memo;
  }
  public set isDone(isDone: boolean) {
    this._isDone = isDone;
  }
}
