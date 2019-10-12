import { Injectable } from '@angular/core';
import { Beer } from "../../interfaces/Beer";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BEERS } from "../../mocks/Beers"
@Injectable({
  providedIn: 'root'
})
export class BeerDataService {
  public beers: Beer[];

  constructor(private api: HttpClient) { }
  
  getBeers() {
    return this.api.get('https://seminario-angular-tudai.firebaseio.com/Cervezas.json');
  }
}
