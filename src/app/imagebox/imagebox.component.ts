import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-imagebox',
  templateUrl: './imagebox.component.html',
  styleUrls: ['./imagebox.component.css']
})
export class ImageboxComponent {
  @Input() itemName: string='Item'
 
  @Input() itemPrice: string=''
  @Input() itemId: string=""
  @Input() itemDescription:string='A short description about this product'
  public itemCount:number=0
  constructor(private data: DataServiceService){
  
  }
  

  increaseCount(){

    this.data.changeMessage()
    
  }
  
}
