export class Redeem {
  public couponId: string;
  public originalPrice: number;
  public constructor(init?: Partial<Redeem>) {
    Object.assign(this, init);
  }
}
