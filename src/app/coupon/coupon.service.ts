import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Coupon } from './coupon.model';
import { Redeem } from './redeem.model';

@Injectable()
export class CouponService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>('http://localhost:51165/api/coupons/getall');
  }

  create(coupon: Coupon): Observable<any> {
    return this.httpClient.post('http://localhost:51165/api/coupons/create', coupon);
  }

  redeem(redeem: Redeem): Observable<any> {
    return this.httpClient.post('http://localhost:51165/api/coupons/redeem', redeem);
  }
}
