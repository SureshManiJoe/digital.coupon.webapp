import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CouponService } from '../coupon.service';
import { Coupon } from '../coupon.model';
import { Redeem } from '../redeem.model';

@Component({
  selector: 'redeem-dialog',
  templateUrl: './redeem-dialog.component.html',
  styleUrls: ['./redeem-dialog.component.scss']
})
export class RedeemDialogComponent implements OnInit {
  coupon: Coupon = new Coupon();
  originalPrice: number;
  isFormValid: boolean = true;
  couponRedumptionErrored: boolean = false;
  isAdmin: boolean = false;
  constructor(
    private service: CouponService,
    public dialogRef: MatDialogRef<RedeemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.coupon = this.data.coupon;
    this.isAdmin = this.data.isAdmin;
  }

  onRedeem(): void {
    if (this.originalPrice == undefined) {
      this.isFormValid = false;
      return;
    }
    let redeem = new Redeem();
    redeem.couponKey = this.coupon.key;
    redeem.assetOriginalPrice = this.originalPrice;
    this.isFormValid = true;
    this.couponRedumptionErrored = false;
    this.service.redeem(redeem).subscribe(
      response => {
        this.coupon.status = 'REDEEMED';
        this.dialogRef.close(response);
      },
      error => {
        this.couponRedumptionErrored = true;
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
