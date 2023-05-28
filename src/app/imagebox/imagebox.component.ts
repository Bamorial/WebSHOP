import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { DataServiceService } from '../data-service.service';
import { Items } from '../models/items';
import { Router } from '@angular/router';



@Component({
  selector: 'app-imagebox',
  templateUrl: './imagebox.component.html',
  styleUrls: ['./imagebox.component.css']
})
export class ImageboxComponent {
  @Input() item: Items | undefined
  public itemCount:number=0
  constructor(private data: DataServiceService, private router:Router){
  
  }
  

  getId(a?: any){
    
   (window as any).id=a
    console.log((window as any).id)
    this.router.navigate(['./Order'])
}
  
}
