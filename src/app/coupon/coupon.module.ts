import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CouponRoutingModule } from './coupon-routing.module';
import { CouponComponent } from './coupon.component';
import { CouponService } from './coupon.service';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { RedeemDialogComponent } from './redeem-dialog/redeem-dialog.component';
import { CustomerService } from './customer.service';

@NgModule({
  imports: [CommonModule, FormsModule, MatDialogModule, TranslateModule, CoreModule, SharedModule, CouponRoutingModule],
  entryComponents: [CreateDialogComponent, RedeemDialogComponent],
  declarations: [CouponComponent, CreateDialogComponent, RedeemDialogComponent],
  providers: [CouponService, CustomerService]
})
export class CouponModule {}
