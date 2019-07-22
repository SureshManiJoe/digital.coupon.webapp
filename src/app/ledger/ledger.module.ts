import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatDialogModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { LedgerRoutingModule } from './ledger-routing.module';
import { LedgerComponent } from './ledger.component';
import { LedgerService } from './ledger.service';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, LedgerRoutingModule],
  declarations: [LedgerComponent],
  providers: [LedgerService]
})
export class LedgerModule {}
