export class Redeem {
  public couponKey: string;
  public partnerKey: string;
  public customerKey: string;
  public assetOriginalPrice: number;
  public constructor(init?: Partial<Redeem>) {
    Object.assign(this, init);
  }
}
