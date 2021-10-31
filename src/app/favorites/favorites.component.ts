import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from '../store/counter/counter.action';
import { AddToFav, RemoveFav } from '../store/fav/fav.action';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  items;
  cartCounter;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select('fav').subscribe((data) => {
      //console.log(data);
      this.items = data.currentItem;
    });
    this.store.select('counter').subscribe((data) => {
      this.cartCounter = data;
    });
    //console.log(this.items);
  }
  deleteFav(productItem, i) {
    let arr = this.items.filter((value) => {
      return productItem.id != value.id;
    });
    this.store.dispatch(new RemoveFav(JSON.parse(JSON.stringify(arr))));
    this.store.dispatch(new Counter(this.cartCounter - 1));
  }
}
