import { Component, OnInit, Input } from "@angular/core";
import { AddressDeliverTimeService } from 'src/app/services/addressDeliverTime.service';

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
  @Input() loggedUserName: string = "sounish";
  public addresses: Address[];
  public timmings: DeliveryTime[];

  // public addresses: Address[] = [
  //   {
  //     icon: "home",
  //     type: "Home",
  //     address: "Brainware University, Barasat, 700 124"
  //   },
  //   {
  //     icon: "work",
  //     type: "Work",
  //     address: "Webguru Infosys, Saltlake v, Kol"
  //   },
  //   {
  //     icon: "navigation",
  //     type: "Home",
  //     address: "BGI Hostel, Barasat, Kol"
  //   }
  // ];

  // public timmings: DeliveryTime[] = [
  //   {
  //     icon: "schedule",
  //     value: "Delivery Now"
  //   },
  //   {
  //     icon: "date_range",
  //     value: "Schedule for later"
  //   }
  // ];

  constructor(private _addressDeliveryService: AddressDeliverTimeService) {}

  ngOnInit() {
    this.addresses = this._addressDeliveryService.getAddress();
    this.timmings = this._addressDeliveryService.getTimmings();
  }
}
