import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { HomeComponent } from "./home/home.component";
import { ResturantsComponent } from "./resturants/resturants.component";
import { ResturantDetailsComponent } from "./resturants/resturant-details/resturant-details.component";
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: "index", pathMatch: "full", redirectTo: "/" },
  { path: "", component: HomeComponent },
  { path: "login", component: SigninComponent },
  { path: "admin", component: AdminLoginComponent },
  { path: "dashboard", component: DashboardComponent },
  {path: "resturants", component: ResturantsComponent },
  {
    path: "resturants/resturant-details/:id",
    component: ResturantDetailsComponent
  },
  { path: 'our-teams', component: TeamsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
