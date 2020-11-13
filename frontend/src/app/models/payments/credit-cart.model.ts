import { Payment } from './payment.model';

export class CreditCardModel implements Payment {

  constructor() {
  }

  calculaValor(valor: number): number {
    return valor * 1.2;
  }

}
