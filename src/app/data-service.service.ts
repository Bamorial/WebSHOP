import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  itemCount:number=0
  private message= new BehaviorSubject<number>(this.itemCount)
  currentMessage= this.message.asObservable()
  constructor() { }
  changeMessage(){
    this.itemCount++
    this.message.next(this.itemCount);
    console.log(this.itemCount)
  }
}
