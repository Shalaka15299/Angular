import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.css']
})
export class EditPizzaComponent implements OnInit {
  public productList: any;
  onepizza: any;
  pizzaname: any;
  pizzasize: any;
  pizzaprice: any;
  id:any;
  constructor(private adminService:AdminserviceService) { }

  ngOnInit(): void {
    //this.viewProductById(pizza:any);
    this.onepizza=this.adminService.temp;
    this.pizzaname = this.onepizza.productName;
    this.pizzasize = this.onepizza.productSize;
    this.pizzaprice = this.onepizza.productPrice;
    this.id = this.onepizza._id;
  }

  viewProductById(pizza:any){
    var pizzaid=pizza.id;
    this.adminService.getProductById(pizzaid)
    .subscribe((res:any)=>{
      this.productList=res;
    })
  }

}
