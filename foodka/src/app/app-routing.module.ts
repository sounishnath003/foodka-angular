import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { HomeComponent } from "./home/home.component";
import { ResturantsComponent } from "./resturants/resturants.component";
import { ResturantNavbarComponent } from "./resturants/resturantNavbar/resturantNavbar.component";
import { ResturantDetailsComponent } from "./resturants/resturant-details/resturant-details.component";
import { FoodCardComponent } from './resturants/foodCard/foodCard.component';

const routes: Routes = [
  { path: "index", pathMatch: "full", redirectTo: "/" },
  { path: "", component: HomeComponent },
  { path: "login", component: SigninComponent },
  { path: "resturants", component: ResturantsComponent },
  { path: "resturants/resturant-details/food", component: FoodCardComponent },
  {
    path: "resturants/resturant-details",
    component: ResturantDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
