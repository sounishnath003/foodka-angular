import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: "app-currentOrder",
  templateUrl: "./currentOrder.component.html",
  styleUrls: ["./currentOrder.component.css"]
})
export class CurrentOrderComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<CurrentOrderComponent>
  ) {}

  ngOnInit() {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
