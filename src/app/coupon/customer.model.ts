export class Customer {
  public id: string;
  public name: string;
  public email: string;
  public constructor(init?: Partial<Customer>) {
    Object.assign(this, init);
  }
}
