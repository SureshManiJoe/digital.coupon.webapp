import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://ec2-3-89-157-47.compute-1.amazonaws.com:3000/customers');
  }
}
