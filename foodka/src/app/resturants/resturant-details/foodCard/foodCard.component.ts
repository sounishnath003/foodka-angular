import { Component, OnInit } from '@angular/core';
import { ResturantsDetailsService } from 'src/app/services/resturants-details.service';

@Component({
  selector: 'app-foodCard',
  templateUrl: './foodCard.component.html',
  styleUrls: ['./foodCard.component.css']
})
export class FoodCardComponent implements OnInit {
  data:any={}
  vegFood:any={}
  constructor(private _foodData:ResturantsDetailsService) {
    this.data = this._foodData.getResturantsData()[0];
    this.vegFood = this.data.foods.veg
   }

  ngOnInit() {
    console.log(this.vegFood)
  }

}
