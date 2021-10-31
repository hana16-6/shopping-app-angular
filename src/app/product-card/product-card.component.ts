import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { WishListService  } from '../wish-list.service';
import{CartservService } from '../cartserv.service';
import { AddToFav } from '../store/fav/fav.action';
import { Store } from '@ngrx/store';
import{Counter} from '../store/counter/counter.action'


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productItem: any;
  @Output() sendDataToList = new EventEmitter<object>();
  wishlistCounter;
  items;
  cartCounter;
  constructor(private router: Router,private wishListService:WishListService,private cartServ : CartservService,private store:Store<any> ) { }

  ngOnInit(): void {
    this.wishListService.currentWishlistCount.subscribe(
      (value) => (this.wishlistCounter = value)
    );
    this.store.select('fav').subscribe(data=> {
      this.items= data.currentItem 
    });
    this.store.select('counter').subscribe(data=>{
      this.cartCounter =data;
    });   
  }
  sendData() {
    this.sendDataToList.emit(this.productItem);
  }
  viewDetails(id: number) {
    this.router.navigate([`details/${id}`]);
  }
  addtoCart(productItem:any){
    this.cartServ.addtoCart(productItem);
    this.updateCounter();
    console.log("from add to cart",productItem);
 
  }
  updateCounter(){
    this.wishListService.updatewishListCounter(++this.wishlistCounter)
    //console.log(this.wishlistCounter);
  }
 
  addtoFav(productItem){
    console.log("from add fav ",this.items);
    if(!this.items.filter(item => item.id == productItem.id).length){
      this.store.dispatch(new AddToFav(JSON.parse(JSON.stringify(productItem))));
      this.store.dispatch(new Counter(this.cartCounter+1));
    }
 
  }
}
