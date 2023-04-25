import { Injectable } from '@angular/core';
import { Items } from './models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  getAll():Items[]{    //fetchuieste datele din firebase direct aici?
    return[
      {
        id: 114,
        name:"Item 4",
        price:10,
        imageURL:",,,",
        description:"a short description about this productfhjdfhj"
      },
      {
        id: 114,
        name:"Item 2",
        price:10,
        imageURL:",,,",
        description:"a short description about this product but is longer"
      },
      {
        id: 113,
        name:"Item 3",
        price:10,
        imageURL:",,,",
        description:"a short description about this product"
      }
    ]

    

  }

}
