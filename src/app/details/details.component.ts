import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from '../products.service';
import { WishListService  } from '../wish-list.service';
import{CartservService } from '../cartserv.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  wishlistCounter;
  public grandTotal : any;
  constructor(public router: ActivatedRoute,private productUsers:ProductsService,private wishListService:WishListService,private cartServ : CartservService) { }
  item: any;
  gradeTotal;
  ngOnInit(): void {
    this.router.params.subscribe(param => {
      console.log(param)
      this.productUsers.getProductDetails(param.id).subscribe(
        data=>{
          console.log(data);
          this.item = data
        }
      )
    }); 
    this.wishListService.currentWishlistCount.subscribe(
      (value) => (this.wishlistCounter = value)
    );
  }
  updateCounter(productItem){
      console.log(this.item);
    this.cartServ.addtoCart(productItem);
    this.wishListService.updatewishListCounter(++this.wishlistCounter)
    console.log(this.wishlistCounter);
  }

}
