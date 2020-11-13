import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Products} from '../models/products/products.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ProductsService {

  url = 'http://localhost:3001/products';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  public getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url);
  }

  public postProducts(prod: Products): Observable<Products> {
    return this.http.post<Products>(this.url, prod);
  }

  public putProducts(prod: Products): Observable<Products> {
    const url = `${this.url}/${prod.id}`;
    return this.http.put<Products>(url, prod);
  }
}
