import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
private wishListCounter = new BehaviorSubject(0);
currentWishlistCount = this.wishListCounter.asObservable();

  constructor() { }
  getwishListCounter(){
    return this.wishListCounter;
  }
  updatewishListCounter(newCounter){
    //console.log(newCounter);
    this.wishListCounter.next(newCounter);
  }
}
