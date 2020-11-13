import { Payment } from './payment.model';

export class BilletModel implements Payment {

  constructor() {
  }

  calculaValor(valor: number): number {
    return valor;
  }

}
