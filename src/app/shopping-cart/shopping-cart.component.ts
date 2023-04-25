import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  public itemCount:number=0
constructor(private data: DataServiceService){

}

ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.itemCount= message)
}



 
}
