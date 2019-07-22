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
    this.coupon.revenueSharePercent = 4.5;
    this.customers = this.data;
  }

  onChangeCustomer(): void {
    var choosedCustomer = this.customers.find(c => c.id == this.coupon.customer.id);
    this.coupon.customer.id = choosedCustomer.id;
    this.coupon.customer.name = choosedCustomer.name;
    this.coupon.customer.email = choosedCustomer.email;
  }

  onCreate(): void {
    this.isFormValid = true;
    this.couponCreationErrored = false;
    if (
      this.coupon.name == undefined ||
      this.coupon.discountPercent == undefined ||
      this.coupon.customer.id == undefined ||
      this.coupon.expiresOn == undefined ||
      this.coupon.revenueSharePercent == undefined
    ) {
      this.isFormValid = false;
      return;
    }
    this.service.create(this.coupon).subscribe(
      response => {
        this.coupon = response;
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
}
