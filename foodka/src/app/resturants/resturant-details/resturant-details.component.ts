import { Component, OnInit } from "@angular/core";
import { ResturantsDetailsService } from "../../services/resturants-details.service";
import { MatDialog } from '@angular/material/dialog';
import { OfferDetailsComponent } from 'src/app/offerDetails/offerDetails.component';

@Component({
  selector: "app-resturant-details",
  templateUrl: "./resturant-details.component.html",
  styleUrls: ["./resturant-details.component.css"],
})

export class ResturantDetailsComponent implements OnInit {
  data: any = {};
  constructor(private _resturantData: ResturantsDetailsService, private _openDialog: MatDialog ) {
    this.data = this._resturantData.getResturantsData()[0];
    console.log(this.data);
  }

  ngOnInit(): void {}

  openOfferDeatails() {
    this._openDialog.open(OfferDetailsComponent, {
      width: '420px'
    })
  };


}
