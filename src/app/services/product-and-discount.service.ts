import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Instance} from "../models/Instance";
import { ProductAndDiscount } from '../models/product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductAndDiscountService {

  baseUrl = Instance.url + "/api/product-discount";
  REST_API: string = 'https://jsonplaceholder.typicode.com/productanddiscount';

  constructor(private http: HttpClient) { }

  getProductAndDiscountService(productId: number): Observable<ProductAndDiscount> {
    return this.http.get<ProductAndDiscount>(this.baseUrl + "/" + productId);
  }

    getProductandDiscount(): Observable<ProductAndDiscount[]> {
    return this.http.get<ProductAndDiscount[]>(`${this.REST_API}`)
  }

}
