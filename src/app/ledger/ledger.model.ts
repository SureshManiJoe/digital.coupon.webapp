import { Coupon } from '@app/coupon/coupon.model';

export class Ledger {
  public id: string;
  public originalPrice: number;
  public discountAmount: number;
  public salesAmount: number;
  public revenueShareAmount: number;
  public settlementAmount: number;
  public coupon: Coupon;
  public constructor(init?: Partial<Ledger>) {
    Object.assign(this, init);
  }
}
