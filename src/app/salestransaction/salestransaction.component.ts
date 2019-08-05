import { Component, OnInit } from '@angular/core';
import { SalesTransactionService } from './salestransaction.service';
import { SalesTransaction } from './salestransaction.model';

@Component({
  selector: 'salestransaction',
  templateUrl: './salestransaction.component.html',
  styleUrls: ['./salestransaction.component.scss']
})
export class SalesTransactionComponent implements OnInit {
  salesTransaction: SalesTransaction[] = [];

  constructor(private service: SalesTransactionService) {}

  ngOnInit() {
    this.service.getAll().subscribe(l => (this.salesTransaction = l));
  }
}
