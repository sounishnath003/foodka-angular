import { Component, OnInit } from '@angular/core';
import { ResturantsDetailsService } from 'src/app/services/resturants-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foodCard',
  templateUrl: './foodCard.component.html',
  styleUrls: ['./foodCard.component.css']
})
export class FoodCardComponent implements OnInit {
  data:any={}
  vegFood:any={}
  id:number;
  constructor(private _foodData:ResturantsDetailsService,private _activeRoute:ActivatedRoute) {

    this._activeRoute.params.subscribe(param=>{
      this.id = param.id;
    })

    this.data = this._foodData.getResturantsData()[--this.id];
    this.vegFood = this.data.foods.veg
   }

  ngOnInit() {
    console.log(this.vegFood)
  }

}
