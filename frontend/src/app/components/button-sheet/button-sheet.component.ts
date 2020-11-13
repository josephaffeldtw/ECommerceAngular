import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Payment } from '../../models/payments/payment.model';
import { TypePaymentsService } from '../../services/type-payments.service';

@Component({
  selector: 'app-botton-sheet',
  templateUrl: './botton-sheet.component.html',
  styleUrls: ['./button-sheet.component.css']
})
export class ButtonSheetComponent implements OnInit {

  typePayments: Payment[];

  constructor(private bottomSheetRef: MatBottomSheetRef<ButtonSheetComponent>,
              private payService: TypePaymentsService) {}

  ngOnInit(): void {
    this.payService.getPayments().subscribe( (list: Payment[]) => {
      this.typePayments = list;
    },
      (e) => {
        console.log(e);
      }
    );
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    console.log(event);
  }

}
