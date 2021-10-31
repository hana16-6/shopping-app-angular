import { Component, OnInit } from '@angular/core';
import { CartservService } from '../cartserv.service';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  wishlistCounter;
  public products: any = [];
  public grandTotal: any = 0;
  constructor(
    private cartServ: CartservService,
    private wishListService: WishListService
  ) {}

  ngOnInit(): void {
    this.cartServ.getProducts().subscribe((value) => {
      this.products = value;
      // this.grandTotal = this.cartServ.getTotalPrice();
      this.products.forEach((element) => {
        this.grandTotal += element.price * element.quantity;
      });
    });
    this.wishListService.currentWishlistCount.subscribe(
      (value) => (this.wishlistCounter = value)
    );
  }

  removeItem(item: any) {
    this.cartServ.removeCartItem(item);
    this.grandTotal = 0;
    this.products.forEach((element) => {
      this.grandTotal += element.price * element.quantity;
    });
    this.wishListService.updatewishListCounter(
      this.wishlistCounter - item.quantity
    );
  }
  updateCounter() {
    this.wishListService.updatewishListCounter(--this.wishlistCounter);
  }
  increaseCounter(i) {
    this.products[i].quantity += 1;
    this.grandTotal = 0;
    this.products.forEach((element) => {
      this.grandTotal += element.price * element.quantity;
    });
    console.log('from increaseCounter', this.products[i]);
    this.wishListService.updatewishListCounter(++this.wishlistCounter);
  }
  decreaseCounter(i) {
    //this.cartServ.decreaseCounter(i);
    console.log('from decreaseCounter', this.products[i]);
    if (this.products[i].quantity != 1) {
      this.products[i].quantity -= 1;
      this.grandTotal = 0;
      this.products.forEach((element) => {
        this.grandTotal += element.price * element.quantity;
      });
      this.wishListService.updatewishListCounter(--this.wishlistCounter);
    }
  }
}
