// tslint:disable: quotemark
import { Component, OnInit, Input } from "@angular/core";
import { Beer } from "src/interfaces/Beer";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  // tslint:disable: no-input-rename
  @Input("product") product: Beer;
  @Input("list") list: boolean;

  constructor() {}

  addToCart(product: Beer) {
    console.log((product.stockLeft -= 1));
  }

  ngOnInit() {}
}