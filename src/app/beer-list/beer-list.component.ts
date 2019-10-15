// tslint:disable: quotemark
import { Component, OnInit, Input } from "@angular/core";
import { Beer } from "../../interfaces/Beer";
import { BeerDataService } from '../servicies/beer-data.service';
import { CartServiceService } from '../servicies/cart-service.service';

@Component({
  selector: "app-beer-list",
  templateUrl: "./beer-list.component.html",
  styleUrls: ["./beer-list.component.scss"]
})
export class BeerListComponent implements OnInit {
  public beers: Beer[];
  @Input("cartItems") cartItems: Beer[];
  
  constructor(private BeerDataService: BeerDataService, private CartService: CartServiceService) {}

  ngOnInit() {
    this.BeerDataService.getBeers().subscribe(response  => {
      this.beers = response as Beer[];
    });
  }

  addToCart(beer: Beer) {
    this.CartService.addToCart(beer);
  }
}
