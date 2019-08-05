export class Customer {
  public key: string;
  public name: string;
  public email: string;
  public constructor(init?: Partial<Customer>) {
    Object.assign(this, init);
  }
}
