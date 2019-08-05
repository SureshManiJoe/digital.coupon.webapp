import { Coupon } from '@app/coupon/coupon.model';

export class SalesTransaction {
  public key: string;
  public assetOriginalPrice: number;
  public discountAmount: number;
  public salesAmount: number;
  public revenueShareAmount: number;
  public settlementAmount: number;
  public coupon: Coupon;
  public partner: Partner;
  public constructor(init?: Partial<SalesTransaction>) {
    Object.assign(this, init);
  }
}

export class Partner {
  public key: string;
  public name: string;
}
