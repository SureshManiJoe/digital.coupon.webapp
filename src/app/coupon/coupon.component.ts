import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CouponService } from './coupon.service';
import { Coupon } from './coupon.model';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { RedeemDialogComponent } from './redeem-dialog/redeem-dialog.component';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';
import { CredentialsService } from '@app/core';

@Component({
  selector: 'coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
  coupons: Coupon[] = [];
  customers: Customer[] = [];
  isAdmin: boolean = false;
  constructor(
    private credentialService: CredentialsService,
    private couponService: CouponService,
    private customerService: CustomerService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.credentialService.credentials.isAdmin) {
      this.isAdmin = true;
    }
    this.couponService.getAll().subscribe(cs => (this.coupons = cs));
    this.customerService.getAll().subscribe(cs => (this.customers = cs));
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '700px',
      data: this.customers
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.coupons.unshift(result);
      }
    });
  }

  openRedeemDialog(coupon: Coupon): void {
    const dialogRef = this.dialog.open(RedeemDialogComponent, {
      width: '700px',
      data: { coupon: coupon, isAdmin: this.isAdmin }
    });
  }
}
