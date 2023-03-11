import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/portal/src/environments/environment';
import { Observable, take } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  all(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseURL}/products`).pipe(take(1));
  }

  allCatgs() {
    return this.http
      .get<any[]>(`${this.baseURL}/products/categories`)
      .pipe(take(1));
  }

  one(id: string): Observable<IProduct> {
    return this.http
      .get<IProduct>(`${this.baseURL}/products/${id}`)
      .pipe(take(1));
  }

  addProduct(payload: any): Observable<IProduct> {
    return this.http
      .post<IProduct>(`${this.baseURL}/products`, payload)
      .pipe(take(1));
  }

  updateProduct(id: string, payload: any): Observable<IProduct> {
    return this.http
      .put<IProduct>(`${this.baseURL}/products/${id}`, payload)
      .pipe(take(1));
  }

  deleteProduct(id: string): Observable<IProduct> {
    return this.http
      .delete<IProduct>(`${this.baseURL}/products/${id}`)
      .pipe(take(1));
  }

  getRatingAsArray(rating: any): any {
    return Array(Math.ceil(rating))
      .fill(0)
      .map((x, i) => i);
  }
}
