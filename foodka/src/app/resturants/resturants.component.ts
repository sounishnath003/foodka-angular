import { Component, OnInit } from "@angular/core";
import { UserAuthService } from "../services/userAuth.service";
import { ResturantsDetailsService } from '../services/resturants-details.service';

@Component({
  selector: "app-resturants",
  templateUrl: "./resturants.component.html",
  styleUrls: ["./resturants.component.css"]
})
export class ResturantsComponent implements OnInit {
  username: string;
  resturants: {} ;

  constructor(
    private _userAuthdata: UserAuthService,
    private _resturantsData: ResturantsDetailsService
  ) {
    console.log(this._resturantsData.getResturantsData()[0]);
  }

  ngOnInit() {
    this._userAuthdata.currentUser.subscribe(
      message => (this.username = message)
    );

    this.resturants =  this._resturantsData.getResturantsData()

  }
}
