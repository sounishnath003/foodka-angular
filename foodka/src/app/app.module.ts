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

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      FoodSearchComponent,
      HomeCardsComponent,
      FooterComponent
   ],
   imports: [
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
