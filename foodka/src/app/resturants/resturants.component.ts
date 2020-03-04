import { Component, OnInit } from "@angular/core";
import { UserAuthService } from "../services/userAuth.service";

@Component({
  selector: "app-resturants",
  templateUrl: "./resturants.component.html",
  styleUrls: ["./resturants.component.css"]
})
export class ResturantsComponent implements OnInit {
  username: string;

  constructor(private _userAuthdata: UserAuthService) {}

  ngOnInit() {
    this._userAuthdata.currentUser.subscribe(
      message => (this.username = message)
    );
  }
}
