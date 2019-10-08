// tslint:disable: quotemark
import { Component, OnInit, Input } from "@angular/core";
import { Beer } from "src/interfaces/Beer";

@Component({
  selector: "app-beer-cart",
  templateUrl: "./beer-cart.component.html",
  styleUrls: ["./beer-cart.component.scss"]
})
export class BeerCartComponent implements OnInit {
  @Input("cartItems") cartItems: Beer[];

  constructor() {}

  ngOnInit() {}
}
