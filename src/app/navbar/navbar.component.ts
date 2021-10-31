import { Component, OnInit } from '@angular/core';
import { WishListService } from '../wish-list.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  wishListCounter: any;
  cartCounter;
  constructor(
    private wishLishService: WishListService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.wishLishService.currentWishlistCount.subscribe(
      (value) => (this.wishListCounter = value)
    );
    //console.log(this.wishListCounter);
    this.store.select('counter').subscribe((data) => {
      this.cartCounter = data;
    });
  }
}
