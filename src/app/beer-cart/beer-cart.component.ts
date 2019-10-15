// tslint:disable: quotemark
import { Component, OnInit, Input } from "@angular/core";
import { Beer } from "src/interfaces/Beer";
import { CartServiceService } from '../servicies/cart-service.service';

@Component({
  selector: "app-beer-cart",
  templateUrl: "./beer-cart.component.html",
  styleUrls: ["./beer-cart.component.scss"]
})
export class BeerCartComponent implements OnInit {
  private cartItems: Beer[];

  constructor(private CartService: CartServiceService) {}

  ngOnInit() {
    this.CartService.getCartItems().subscribe(response => {
      this.cartItems = response as Beer[];
    })
  }
}
