import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CouponService } from '../coupon.service';
import { Coupon } from '../coupon.model';
import { Customer } from '../customer.model';

@Component({
  selector: 'create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
  coupon: Coupon = new Coupon();
  customers: Customer[] = [];
  isFormValid: boolean = true;
  couponCreationErrored: boolean = false;
  constructor(
    private service: CouponService,
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.coupon.customer = new Customer();
    this.coupon.status = 'ISSUED';
    this.coupon.revenueSharePercent = '4.5';
    this.customers = this.data;
  }

  onChangeCustomer(): void {
    var choosedCustomer = this.customers.find(c => c.key == this.coupon.customer.key);
    this.coupon.customer.key = choosedCustomer.key;
    this.coupon.customer.name = choosedCustomer.name;
    this.coupon.customer.email = choosedCustomer.email;
  }

  onCreate(): void {
    this.isFormValid = true;
    this.couponCreationErrored = false;
    this.coupon.customerKey = this.coupon.customer.key;
    this.coupon.discountAmount = this.coupon.discountAmount.toString();
    this.coupon.revenueSharePercent = this.coupon.revenueSharePercent.toString();
    this.coupon.expiresOn = this.convertDateString(new Date(this.coupon.expiresOn));
    if (
      this.coupon.name == undefined ||
      this.coupon.discountAmount == undefined ||
      this.coupon.customer.key == undefined ||
      this.coupon.expiresOn == undefined ||
      this.coupon.revenueSharePercent == undefined
    ) {
      this.isFormValid = false;
      return;
    }

    this.service.create(this.coupon).subscribe(
      response => {
        this.dialogRef.close(this.coupon);
      },
      error => {
        this.couponCreationErrored = true;
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  convertDateString(date: any) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '-' + mm + '-' + yyyy;
  }
}
