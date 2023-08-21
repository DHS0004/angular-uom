import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { AddProductResponse } from '../model/add-product-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://host1.open.uom.lk:8000/';
  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      ` ${this.baseUrl}api/product`,
      product,
      this.httpOptions
    );
  }
}
