import { Payment } from './payment.model';

export class DebitCardModel implements Payment {

  constructor() {
  }

  calculaValor(valor: number): number {
    return valor * 1.3;
  }

}
