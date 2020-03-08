import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { CurrentOrderComponent } from '../currentOrder/currentOrder.component';


@Component({
  selector: "app-foodCard",
  templateUrl: "./foodCard.component.html",
  styleUrls: ["./foodCard.component.css"]
})
export class FoodCardComponent implements OnInit {
  static orderCount: number = 0 ;
  
  constructor(private _matBottomSheet: MatBottomSheet) {}

  ngOnInit() {}

  openBottomSheet() {
    this._matBottomSheet.open(CurrentOrderComponent, { })
  }

  addFood = () => {
    FoodCardComponent.orderCount++ ;
    this.openBottomSheet() ;
  }

}
