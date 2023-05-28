import { Component } from '@angular/core';
import { Orders } from '../models/order';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  name: string=''
  address: string=''
  mail: string=''
  phone: string=''
  order: Orders=new Orders(); 

  constructor(private router:Router){

  }
  async Submit(){
    this.order.name=this.name
    this.order.address=this.address
    this.order.mail=this.mail
    this.order.phone=this.phone

    this.order.id=(window as any).id
    try{
      await axios.post('http://localhost:3000/orders',
      {
          "productId": this.order.id,
          "name": this.order.name,
          "address":this.order.address,
          "phone":this.order.phone,
          "mail": this.order.mail

      })
      this.router.navigate(['./Done'])
    }
    catch(error){
      console.log(error)
      this.router.navigate(['./Error'])
    }
  }

}
