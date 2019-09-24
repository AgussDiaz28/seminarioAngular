// tslint:disable: quotemark
import { Component, OnInit } from "@angular/core";
import { Beer } from "../../interfaces/Beer";
import { BEERS } from "src/mocks/Beers";

@Component({
  selector: "app-beer-list",
  templateUrl: "./beer-list.component.html",
  styleUrls: ["./beer-list.component.scss"]
})
export class BeerListComponent implements OnInit {
  public beers: Beer[] = BEERS;

  constructor() {}

  ngOnInit() {}
}
