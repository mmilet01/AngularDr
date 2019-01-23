import { Injectable } from '@angular/core';
import { ProductInterface } from '../productInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsUrl = '../../../assets/products.json';
  public favorites: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public grades: BehaviorSubject<any> = new BehaviorSubject<any>('');




  constructor(
    private http: HttpClient
  ) {     }

  getProducts(): Observable<ProductInterface[]> {
    console.log(this.http.get<ProductInterface[]>(this.productsUrl));
    return this.http.get<ProductInterface[]>(this.productsUrl);
  }
  singleProduct(id: number): Observable<ProductInterface> {
   return this.http.get<ProductInterface[]>(this.productsUrl).pipe(
     map((products)=>products.find((product)=> product.id===id))
   )
  }

}
