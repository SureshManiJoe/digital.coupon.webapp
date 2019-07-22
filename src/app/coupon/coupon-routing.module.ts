import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { CouponComponent } from './coupon.component';

const routes: Routes = [Shell.childRoutes([{ path: 'coupons', component: CouponComponent }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CouponRoutingModule {}
