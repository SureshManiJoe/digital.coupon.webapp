import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SalesTransaction } from './salestransaction.model';

@Injectable()
export class SalesTransactionService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<SalesTransaction[]> {
    return this.httpClient.get<SalesTransaction[]>(
      'http://ec2-3-89-157-47.compute-1.amazonaws.com:3000/salestransactions'
    );
  }
}
