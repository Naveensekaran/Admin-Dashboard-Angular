import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Product } from '../product';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css'],
})
export class SaleListComponent implements OnInit{
  item: string = 'Sale List';
  products : any=[];
  constructor(private data: UserService){}
    
  ngOnInit(){
    this.getProducts();
  }     
  getProducts(){
    this.data.mydata.subscribe(res=>{
      console.log(res);
    this.products=res;
   
     console.log(this.products);
    });
}
 
}
