import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ImageboxComponent } from './imagebox/imagebox.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactComponent } from './contact/contact.component';
import { Axios } from 'axios';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { DoneComponent } from './done/done.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ImageboxComponent,
    HomeComponent,
    ShopComponent,
    ShoppingCartComponent,
    ContactComponent,
    OrderComponent,
    DoneComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
