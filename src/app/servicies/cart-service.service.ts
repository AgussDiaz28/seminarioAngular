import { Injectable } from '@angular/core';
import { Beer } from 'src/interfaces/Beer';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private _items: Beer[] = [];
  private _itemsSubject: BehaviorSubject<Beer[]> = new BehaviorSubject(this._items);
  public items: Observable<Beer[]> = this._itemsSubject.asObservable();
  constructor() { }

  beerInCart(beer: Beer): boolean {
    let response = false;
    this._items.forEach((elem:Beer) => {
      if (elem.name === beer.name) {
        response = true;
      };
    })
    return response;
  }

  addToCart(beer: Beer) {
    if (!this.beerInCart(beer)) {
       this._items.push(beer);
    }
  }

  getCartItems(): Observable<Beer[]> 
  {
    return this.items;
  }
}
