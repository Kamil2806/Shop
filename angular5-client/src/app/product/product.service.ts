import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDto} from './productDto.model';
import {RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = `http://localhost:8080/api/product/`;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any> {
    return this.http.get<ProductDto>(this.productUrl);
  }

  addProduct(productDto: ProductDto): Observable<any> {
    return this.http.post(this.productUrl + `add`, productDto);
  }
}
