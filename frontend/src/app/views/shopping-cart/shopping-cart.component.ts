import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products/products.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ButtonSheetComponent } from '../../components/button-sheet/button-sheet.component';
import { Router } from '@angular/router';
import { TypePaymentsService } from '../../services/type-payments.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {

  listSC: Products[] = [];

  constructor(private scService: ShoppingCartService,
              private bottomSheet: MatBottomSheet,
              private router: Router,
              private tpService: TypePaymentsService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.scService.getProductsShoppingCart().subscribe(list => {
      this.listSC = list;
    });
  }

  deleteProduct(id: number): void {
    this.scService.removeProductShoppingCart(id).subscribe(() => {
      this.scService.showMessage('Product removed');
      this.refresh();
    });
  }

  sumPriceProducts(): number {
    let soma = 0;
    for (let i = 0; i < this.listSC.length; i++) {
      soma = soma + this.listSC[i].price;
    }
    return soma;
  }

  openBottomSheet(): void {
    this.bottomSheet.open(ButtonSheetComponent);
  }

  redirectToPayment(): void{
    this.tpService.patchValue(1, this.sumPriceProducts()).subscribe(() => {});
    this.router.navigate(['/payment']);
  }

  refresh(): void {
    window.location.reload();
  }


}
