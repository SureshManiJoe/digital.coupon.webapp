import { Customer } from './customer.model';

export class Coupon {
  public key: string;
  public name: string;
  public discountAmount: number;
  public revenueSharePercent: number;
  public expiresOn: string;
  public status: string;
  public customer: Customer;
  public constructor(init?: Partial<Coupon>) {
    Object.assign(this, init);
  }
}
