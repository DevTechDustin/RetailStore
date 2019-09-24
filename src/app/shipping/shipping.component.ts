import { CartService } from './../services/cart/cart.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.scss"]
})

export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private CartService: CartService
  ) { 

  }

  ngOnInit() {
    this.shippingCosts = this.CartService.getShippingPrices();
    console.log(this.shippingCosts);
    }
    
  
}
