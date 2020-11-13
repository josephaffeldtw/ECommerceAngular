import { Payment } from './payment.model';

export class PaypalModel implements Payment {

  constructor() {
  }

  calculaValor(valor: number): number {
    return valor * 1.1;
  }

}
