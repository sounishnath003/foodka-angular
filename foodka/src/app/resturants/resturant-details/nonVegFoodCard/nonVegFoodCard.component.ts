import { Component, OnInit } from '@angular/core';
import { ResturantsDetailsService } from 'src/app/services/resturants-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-nonVegFoodCard",
  templateUrl: "./nonVegFoodCard.component.html",
  styleUrls: ["./nonVegFoodCard.component.css"]
})
export class NonVegFoodCardComponent implements OnInit {
  data: any = {};
  nonVegFood: any = {};
  constructor(
    private _foodData: ResturantsDetailsService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this._ActivatedRoute.params.subscribe(param=>{
      // console.log(param)
    })
    this.data = this._foodData.getResturantsData()[0];
    this.nonVegFood = this.data.foods.nonveg;
  }
  ngOnInit() {}
}
