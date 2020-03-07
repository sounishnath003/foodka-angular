import { Component, OnInit } from '@angular/core';
import { ResturantsDetailsService } from 'src/app/services/resturants-details.service';

@Component({
  selector: "app-nonVegFoodCard",
  templateUrl: "./nonVegFoodCard.component.html",
  styleUrls: ["./nonVegFoodCard.component.css"]
})
export class NonVegFoodCardComponent implements OnInit {
  
  data: any = {};
  nonVegFood: any = {};
  constructor(private _foodData: ResturantsDetailsService) {
    this.data = this._foodData.getResturantsData()[0];
    this.nonVegFood = this.data.foods.nonveg;
  }
  ngOnInit() {}
}
