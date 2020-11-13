import { TypePayments } from './type-payments';
import { Payment } from './payment.model';
import { DebitCardModel } from './debit-card.model';
import { BilletModel } from './billet-model';
import { PaypalModel } from './paypal-model';
import { CreditCardModel } from './credit-cart.model';

export class PaymentsFactory {

  constructor() {
  }

  createInstance(type: TypePayments): Payment {
    if (type === TypePayments.DEBIT) {
      return new DebitCardModel();
    } else if (type === TypePayments.CREDIT) {
      return new CreditCardModel();
    } else if (type === TypePayments.BILLET) {
      return new BilletModel();
    } else if (type === TypePayments.PAYPAL) {
      return new PaypalModel();
    }
  }

}
