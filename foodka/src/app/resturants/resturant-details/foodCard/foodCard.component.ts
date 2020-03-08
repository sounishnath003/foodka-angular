import { Component, OnInit } from '@angular/core';
import { ResturantsDetailsService } from 'src/app/services/resturants-details.service';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CurrentOrderComponent } from '../currentOrder/currentOrder.component';

@Component({
  selector: "app-foodCard",
  templateUrl: "./foodCard.component.html",
  styleUrls: ["./foodCard.component.css"]
})
export class FoodCardComponent implements OnInit {
  data: any = {};
  vegFood: any = {};
  id: number;
  static _orderCount: number = 0;
  static _totalOrderedFoods = []

  constructor(
    private _foodData: ResturantsDetailsService,
    private _activeRoute: ActivatedRoute,
    private _matBottomSheet: MatBottomSheet
  ) {
    this._activeRoute.params.subscribe(param => {
      this.id = param.id;
    });

    this.data = this._foodData.getResturantsData()[--this.id];
    this.vegFood = this.data.foods.veg;
  }

  ngOnInit() {
    console.log(this.vegFood);
  }

  addFoodForOrder(foodItem) {
    FoodCardComponent._orderCount++ ;
    this._matBottomSheet.open(CurrentOrderComponent, {
      data: {
        food: foodItem,
        itemCount: FoodCardComponent._orderCount,
        totalOrderedFoods: FoodCardComponent._totalOrderedFoods.push(foodItem)
      }
    });
    console.log(FoodCardComponent._totalOrderedFoods);
  };
}
