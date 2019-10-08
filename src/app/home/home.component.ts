import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/interfaces/Beer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cartItems: Beer[];
  
  constructor() { }

  ngOnInit() {
    this.cartItems = [];
  }

}
