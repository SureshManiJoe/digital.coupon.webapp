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
    return this.httpClient.get<Coupon[]>('http://ec2-3-89-157-47.compute-1.amazonaws.com:3000/coupons');
  }

  create(coupon: Coupon): Observable<any> {
    return this.httpClient.post('http://ec2-3-89-157-47.compute-1.amazonaws.com:3000/coupons', coupon);
  }

  redeem(redeem: Redeem): Observable<any> {
    return this.httpClient.post('http://ec2-3-89-157-47.compute-1.amazonaws.com:3000/coupons/redeem', redeem);
  }
}
