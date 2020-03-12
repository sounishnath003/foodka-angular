import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodSearchComponent } from './foodSearch/foodSearch.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeCardsComponent } from './homeCards/homeCards.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ResturantsComponent } from './resturants/resturants.component';
import { UserAuthService } from './services/userAuth.service';
import { ResturantNavbarComponent } from './resturants/resturantNavbar/resturantNavbar.component';
import { AddressDeliverTimeService } from './services/addressDeliverTime.service';
import { ResturantsDetailsService } from './services/resturants-details.service';
import { ResturantDetailsComponent } from './resturants/resturant-details/resturant-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleDateComponent } from './scheduleDate/scheduleDate.component';
import { SnackbarrService } from './services/snackbarr.service';
import { OrderHistoryComponent } from './orderHistory/orderHistory.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { OfferDetailsComponent } from './offerDetails/offerDetails.component';
import { FoodCardComponent } from './resturants/resturant-details/foodCard/foodCard.component';
import {NonVegFoodCardComponent} from './resturants/resturant-details/nonVegFoodCard/nonVegFoodCard.component'
  import { from } from 'rxjs';
import { CurrentOrderComponent } from './resturants/resturant-details/currentOrder/currentOrder.component';
import { PlaceOrderComponent } from './placeOrder/placeOrder.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FoodSearchComponent,
    HomeCardsComponent,
    FooterComponent,
    SigninComponent,
    HomeComponent,
    ResturantsComponent,
    ResturantNavbarComponent,
    ResturantDetailsComponent,
    ScheduleDateComponent,
    OrderHistoryComponent,
    OfferDetailsComponent,
    FoodCardComponent,
    NonVegFoodCardComponent,
    CurrentOrderComponent,
    PlaceOrderComponent,
    PageNotFoundComponent,
    AdminLoginComponent,
    DashboardComponent,
    TeamsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
  ],
  providers: [
    MatDialog,
    UserAuthService,
    AddressDeliverTimeService,
    ResturantsDetailsService,
    SnackbarrService
  ],
  entryComponents: [
    ScheduleDateComponent,
    OrderHistoryComponent,
    OfferDetailsComponent,
    CurrentOrderComponent,
    PlaceOrderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
