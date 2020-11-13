import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Payment } from '../models/payments/payment.model';
import { ValueModel } from '../models/value/value-model';

@Injectable({
  providedIn: 'root',
})
export class TypePaymentsService {

  apiUrl = 'http://localhost:3001/payments';
  urlValue = 'http://localhost:3001/value';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.apiUrl);
  }

  getValue(): Observable<ValueModel[]> {
    return this.http.get<ValueModel[]>(this.urlValue);
  }

  patchValue(id: number, value: number): Observable<ValueModel> {
    const url = `${ this.urlValue }/${ id }`;
    const val: ValueModel = new ValueModel(value, `${ id }`);
    return this.http.patch<ValueModel>(url, val);
  }
}
