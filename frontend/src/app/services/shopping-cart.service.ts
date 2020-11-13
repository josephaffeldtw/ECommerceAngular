import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products/products.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ShoppingCartService {

  apiUrl = 'http://localhost:3001/shopping-cart';


  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  getProductsShoppingCart(): Observable<Products[]>{
    console.log('chamou o subject');
    return this.http.get<Products[]>(this.apiUrl);
  }

  postProductsShoppingCart(prod: Products): Observable<Products>{
    return this.http.post<Products>(this.apiUrl, prod);
  }

  removeProductShoppingCart(id: number): Observable<Products>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Products>(url);
  }


}
