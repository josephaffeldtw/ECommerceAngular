import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products/products.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  productsList: Products[];

  constructor(private prodService: ProductsService,
              private scService: ShoppingCartService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.retriveAll();
  }

  retriveAll(): void {
    this.prodService.getProducts().subscribe(list => {
      this.productsList = list;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '4000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result');
    });
  }

  addProductInShoppingCart(prod: Products): void {
    this.scService.postProductsShoppingCart(prod).subscribe(() => {
      this.prodService.showMessage('Create Product');
      this.refresh();
    });
  }

  refresh(): void {
    window.location.reload();
  }
}
