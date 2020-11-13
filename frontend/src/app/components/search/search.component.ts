import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products/products.model';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private prodService: ProductsService,
               private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '4000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result');
    });
  }

  registerProduct(prod: Products): void {
    this.prodService.postProducts(prod).subscribe(() => {
    });
  }

}
