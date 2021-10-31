import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartservService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public totalPrice = 0;
  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }
  addtoCart(product: any) {
    let index = this.cartItemList.findIndex((elem) => {
      return elem.id == product.id;
    });
    if (index != -1) {
      this.cartItemList[index].quantity += 1;
      this.cartItemList[index].total =
        this.cartItemList[index].price * product.quantity;
    } else {
      product.quantity = 1;
      this.cartItemList.push(product);
    }
    this.productList.next(this.cartItemList);
  }

  // getTotalPrice(): any {
  //   return this.Total.asObservable();
  // }
  // increaseCounterSer(i): any {
  //   this.cartItemList[i].quantity += 1;
  //   this.totalPrice = 0;
  //   this.cartItemList.forEach((element) => {
  //     element.total += element.price * element.quantity;
  //     this.totalPrice = element.total;
  //   });
  //   return this.totalPrice;
  // }
  // decreaseCounter(i) {
  //   if (this.cartItemList[i].quantity != 1) {
  //     this.cartItemList[i].quantity -= 1;
  //   }
  // }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
}
