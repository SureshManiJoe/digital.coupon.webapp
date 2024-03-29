import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { SalesTransactionComponent } from './salestransaction.component';

const routes: Routes = [Shell.childRoutes([{ path: 'salestransaction', component: SalesTransactionComponent }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SalesTransactionRoutingModule {}
