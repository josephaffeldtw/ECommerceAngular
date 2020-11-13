import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products/products.model';
import { ProductsService } from '../../services/products.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: Products[];

  constructor(private prodService: ProductsService,
              private scService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.retriveAll();
  }

  retriveAll(): void {
    this.prodService.getProducts().subscribe(list => {
      this.productsList = list;
    });
  }

  addProductInShoppingCart(prod: Products): void {
    this.scService.postProductsShoppingCart(prod).subscribe(() => {
      this.prodService.showMessage('Added to Shopping Cart');
    });
  }

  editProduct(prod: Products): void{
     this.prodService.putProducts(prod).subscribe(() => {
       this.prodService.showMessage('Product Edited');
       this.refresh();
     });
  }

  refresh(): void {
    window.location.reload();
  }

}
