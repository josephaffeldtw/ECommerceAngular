import { Component, OnInit } from '@angular/core';
import { TypePaymentsService } from '../../services/type-payments.service';
import { Payment } from '../../models/payments/payment.model';
import { ValueModel } from '../../models/value/value-model';
import { PaymentsFactory } from '../../models/payments/payments-factory';
import { TypePayments } from '../../models/payments/type-payments';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {

  typePayments: Payment[];
  selectedValue: string;
  val: number;

  constructor(private payService: TypePaymentsService) {
  }

  ngOnInit(): void {
    this.payService.getPayments().subscribe((list: Payment[]) => {
        this.typePayments = list;
      },
      (e) => {
        console.log(e);
      },
    );
    this.payService.getValue().subscribe(value => {
      this.val = value[0].value;
    });
  }

  calcValue(): number{
    let tp = TypePayments[this.selectedValue];
    console.log(tp);
    let pf: PaymentsFactory = new PaymentsFactory();
    console.log(pf.createInstance(tp).calculaValor(this.val))
    return pf.createInstance(tp).calculaValor(this.val);
  }
}
