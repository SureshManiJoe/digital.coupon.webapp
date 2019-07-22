import { Customer } from './customer.model';

export class Coupon {
  public id: string;
  public name: string;
  public discountPercent: number;
  public revenueSharePercent: number;
  public expiresOn: string;
  public status: string;
  public customer: Customer;
  public constructor(init?: Partial<Coupon>) {
    Object.assign(this, init);
  }
}
