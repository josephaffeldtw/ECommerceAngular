export class ValueModel {
  public id: string;
  public value: number;

  constructor(value: number, id?: string) {
    this.id = id;
    this.value = value;
  }
}
