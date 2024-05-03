import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  constructor(private data:UserService, private router: Router){}
  ngOnInit(): void {
    
  }
  item: string = 'Orders';

  product : Product = new Product();
  addProduct(){
    this.data.dataemit(this.product);
    this.goToSaleList();
  }
  goToSaleList(){
    this.router.navigate(['/salelist'])
  }
}
