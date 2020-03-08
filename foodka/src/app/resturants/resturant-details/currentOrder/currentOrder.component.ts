import { Component, OnInit, Inject, SimpleChanges } from "@angular/core";
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA
} from "@angular/material/bottom-sheet";
import { FoodCardComponent } from "../foodCard/foodCard.component";
import { MatDialog } from "@angular/material/dialog";
import { PlaceOrderComponent } from "src/app/placeOrder/placeOrder.component";

@Component({
  selector: "app-currentOrder",
  templateUrl: "./currentOrder.component.html",
  styleUrls: ["./currentOrder.component.css"]
})
export class CurrentOrderComponent implements OnInit {
  orderedFoods = [];
  static sum: number = 0;
  total: number;
  private _addClick = 0;
  private _deleteClick = 0;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<CurrentOrderComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.orderedFoods = FoodCardComponent._totalOrderedFoods;
    let amt = this.orderedFoods[this.data.itemCount - 1].price.new;
    amt = amt.replace("₹", 0);
    CurrentOrderComponent.sum = CurrentOrderComponent.sum + parseFloat(amt);

    this.total = CurrentOrderComponent.sum;

    console.log(this.orderedFoods);
    console.log(CurrentOrderComponent.sum);
  }

  deleteItem(index: number) {
    if (this._addClick >= 0) {
      this._deleteClick++;
    }

    let amt = this.orderedFoods[index].price.new;
    // FoodCardComponent._totalOrderedFoods.splice(index, 1);
    amt = amt.replace("₹", 0);
    CurrentOrderComponent.sum =
      CurrentOrderComponent.sum - parseFloat(amt) * this._deleteClick;
    FoodCardComponent._orderCount--;
    this.total = CurrentOrderComponent.sum;
    this.data.itemCount = this.orderedFoods.length - 1;
  }

  addItem(index: number) {
    ++this._addClick;

    let amt = this.orderedFoods[index].price.new;
    amt = amt.replace("₹", 0);
    CurrentOrderComponent.sum =
      CurrentOrderComponent.sum + parseFloat(amt) * this._addClick;
    FoodCardComponent._orderCount++;
    this.total = CurrentOrderComponent.sum;
    this.data.itemCount = this.orderedFoods.length + 1;
  }

  openLink(event: MouseEvent): void {
    event.preventDefault();
  }

  placeOrder() {
    this._bottomSheetRef.dismiss();
    this._matDialog.open(PlaceOrderComponent, {
      width: "670px"
    });
  }
}
