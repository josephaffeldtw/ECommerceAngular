import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductsService } from './services/products.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { SearchComponent } from './components/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ButtonSheetComponent } from './components/button-sheet/button-sheet.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './views/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavegationComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    SearchComponent,
    DialogComponent,
    ButtonSheetComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    ProductsService,
    ShoppingCartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
