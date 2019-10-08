// tslint:disable: quotemark
import { Component, OnInit, Input } from "@angular/core";
import { Beer } from "../../interfaces/Beer";
import { BEERS } from "src/mocks/Beers";

@Component({
  selector: "app-beer-list",
  templateUrl: "./beer-list.component.html",
  styleUrls: ["./beer-list.component.scss"]
})
export class BeerListComponent implements OnInit {
  public beers: Beer[];
  @Input("cartItems") cartItems: Beer[];
  
  constructor() {}

  ngOnInit() {
    this.beers = BEERS;
  }

  addToCart(beer: Beer) {
    console.log('Adding new beer');
    this.cartItems.push(beer);
  }
}
