import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-placeOrder",
  templateUrl: "./placeOrder.component.html",
  styleUrls: ["./placeOrder.component.css"]
})
export class PlaceOrderComponent implements OnInit {
  time = new Date();
  reachTime;

  constructor(private _matDialogRef: MatDialogRef<PlaceOrderComponent>) {
    this.gettime();

    setTimeout(() => {
      _matDialogRef.close();
    }, 5500);
  }

  ngOnInit() {}

  gettime() {
    this.reachTime = this.time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });

    console.log(this.reachTime);
  }

  onNoClick(): void {
    this._matDialogRef.close();
  }
}
