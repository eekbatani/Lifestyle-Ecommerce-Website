import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { CartComponent } from './cart/cart.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    SuccessComponent,
    CartComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
