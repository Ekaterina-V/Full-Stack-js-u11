import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const API_URL = 'http://localhost:4200/api/bakery/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL);
  }
}
