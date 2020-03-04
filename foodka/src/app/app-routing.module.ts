import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ResturantsComponent } from './resturants/resturants.component';


const routes: Routes = [
  {path: 'index', pathMatch: "full", redirectTo: '/'},
  {path: '', component: HomeComponent},
  {path: 'login', component: SigninComponent },
  {path: 'resturants', component: ResturantsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
