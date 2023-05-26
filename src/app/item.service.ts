import { Injectable } from '@angular/core';
import { Items } from './models/items';
import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
 
 
  constructor() { }
  
  async getAll(): Promise<Items[]> {
    try {
      const response = await axios.get<Items[]>('http://localhost:3000/products');
      const items: Items[] = response.data;
      console.log(items); // You can see the array in the console
      return items;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
    
    
    

    
    
      
      // {
      //   id: 114,
      //   name:"Item 4",
      //   price:10,
      //   imageURL:",,,",
      //   description:"a short description about this productfhjdfhj"
      // },
      // {
      //   id: 114,
      //   name:"Item 2",
      //   price:10,
      //   imageURL:",,,",
      //   description:"a short description about this product but is longer"
      // },
      // {
      //   id: 113,
      //   name:"Item 3",
      //   price:10,
      //   imageURL:",,,",
      //   description:"a short description about this product"
      // }
    

    

  }



}
