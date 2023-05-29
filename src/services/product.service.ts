import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct() : Observable<any>{
    return this.http.get('https://fakestoreapi.com/products');
  }
  getProductById(id:number) : Observable<any>{
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
