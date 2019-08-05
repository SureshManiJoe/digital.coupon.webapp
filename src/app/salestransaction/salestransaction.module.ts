import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatDialogModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { SalesTransactionRoutingModule } from './salestransaction-routing.module';
import { SalesTransactionComponent } from './salestransaction.component';
import { SalesTransactionService } from './salestransaction.service';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, SalesTransactionRoutingModule],
  declarations: [SalesTransactionComponent],
  providers: [SalesTransactionService]
})
export class SalesTransactionModule {}
