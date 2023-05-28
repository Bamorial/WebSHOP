import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { DoneComponent } from './done/done.component';
import { ErrorComponent } from './error/error.component';

const routes:Routes =[
  {path: '', component:HomeComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Home', component:HomeComponent},
  {path: 'Shop', component:ShopComponent},
  {path: 'Order', component:OrderComponent},
  {path: 'Done', component:DoneComponent},
  {path: 'Error', component:ErrorComponent}




]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
