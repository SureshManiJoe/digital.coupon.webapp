import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Ledger } from './ledger.model';

@Injectable()
export class LedgerService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Ledger[]> {
    return this.httpClient.get<Ledger[]>('http://localhost:51165/api/ledger/get');
  }
}
