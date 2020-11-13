export class Products {

  public id: string;
  public name: string;
  public price: number;
  public description: string;

  constructor(name: string, price: number, description: string, id?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
