// tslint:disable: quotemark
import { Component, OnInit, Input } from "@angular/core";
import { Beer } from "../../interfaces/Beer";
import { BeerDataService } from '../servicies/beer-data.service';

@Component({
  selector: "app-beer-list",
  templateUrl: "./beer-list.component.html",
  styleUrls: ["./beer-list.component.scss"]
})
export class BeerListComponent implements OnInit {
  public beers: Beer[];
  @Input("cartItems") cartItems: Beer[];
  
  constructor(private BeerDataService: BeerDataService) {}

  ngOnInit() {
    this.beers = this.BeerDataService.getBeers();
  }

  beerInCart(beer: Beer): boolean {
    let response = false;
    this.cartItems.forEach((elem:Beer) => {
      if (elem.name === beer.name) {
        response = true;
      };
    })
    return response;
  }

  addToCart(beer: Beer) {
    // console.log(beer);
    // console.log(this.cartItems);
    // console.log(this.beerInCart(beer))
    if (!this.beerInCart(beer)) {
       this.cartItems.push(beer);
    }
   
  }
}
