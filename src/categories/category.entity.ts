import { v4 as uuid } from 'uuid';

export class CategoryEntity {
  private _id?: string;
  private _date?: Date;

  constructor(
    public name: string,
    public desc: string,
  ) {
    if (!this._id) {
      this._id = uuid();
    }

    if (this._date === undefined) {
      this._date = new Date();
    }
  }

  public get id(): string {
    return this._id;
  }

  public get date(): Date {
    return this._date;
  }
}
