import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { FoodSearchComponent } from './foodSearch/foodSearch.component';
import { HomeCardsComponent } from './homeCards/homeCards.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'index', pathMatch: "full", redirectTo: '/'},
  {path: '', component: HomeComponent},
  {path: 'login', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
