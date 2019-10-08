import { Injectable } from '@angular/core';
import { Beer } from "../../interfaces/Beer";
import { BEERS } from "src/mocks/Beers";

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {
  public beers: Beer[];

  constructor() { 
      this.beers = BEERS;
  }
  getBeers(): Beer[] {
    return this.beers;
}
}
