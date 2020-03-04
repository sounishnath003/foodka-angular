import { Component, OnInit } from "@angular/core";

export interface Address {
  icon: string;
  type: string;
  address: string;
}

export interface DeliveryTime {
  icon: string;
  value: string;
}

@Component({
  selector: "app-resturantNavbar",
  templateUrl: "./resturantNavbar.component.html",
  styleUrls: ["./resturantNavbar.component.css"]
})
export class ResturantNavbarComponent implements OnInit {
  public addresses: Address[] = [
    {
      icon: "home",
      type: "Home",
      address: "Brainware University, Barasat, 700 124"
    },
    {
      icon: "work",
      type: "Work",
      address: "Webguru Infosys, Saltlake v, Kol"
    },
    {
      icon: "navigation",
      type: "Home",
      address: "BGI Hostel, Barasat, Kol"
    }
  ];

  public timmings: DeliveryTime[] = [
    {
      icon: "schedule",
      value: "Delivery Now"
    },
    {
      icon: "date_range",
      value: "Schedule for later"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
