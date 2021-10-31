import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit { 
  productList;
  quantity:any;
 
  constructor(private productUsers:ProductsService) { }


  ngOnInit(): void {
    this.productUsers.getProductsList().subscribe(
      data => {
        this.productList = data;
        this.productList.forEach((a:any) => {
          Object.assign(a,{quantity:0,total:a.price});
        });
        }
    )
  
  }
  receivedProduct(productItem: any) {
    //console.log("parent", productItem);
  }
 

}
