import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-resturants",
  templateUrl: "./resturants.component.html",
  styleUrls: ["./resturants.component.css"]
})
export class ResturantsComponent implements OnInit {
  userObj: string;

  constructor() {}

  ngOnInit() {}

  onSignin = (evenObject: string) => {
    this.userObj = evenObject;
  };
}
