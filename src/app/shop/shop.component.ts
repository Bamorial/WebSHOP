import { Component, OnInit } from '@angular/core';
import { Items } from '../models/items';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items: Items[]=[]
  
  constructor(private itemservice:ItemService){}

  ngOnInit(): void {
      this.items=this.itemservice.getAll();
  }

}
