import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { LedgerComponent } from './ledger.component';

const routes: Routes = [Shell.childRoutes([{ path: 'ledger', component: LedgerComponent }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LedgerRoutingModule {}
