import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { NavComponent } from './nav/nav.component';
import { BeerCartComponent } from './beer-cart/beer-cart.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BeerDataService } from './servicies/beer-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    NavComponent,
    BeerCartComponent,
    FooterComponent,
    ProductCardComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BeerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
