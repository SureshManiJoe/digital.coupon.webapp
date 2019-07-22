import { Component, OnInit } from '@angular/core';
import { LedgerService } from './ledger.service';
import { Ledger } from './ledger.model';

@Component({
  selector: 'ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent implements OnInit {
  ledger: Ledger[] = [];

  constructor(private service: LedgerService) {}

  ngOnInit() {
    this.service.getAll().subscribe(l => (this.ledger = l));
  }
}
