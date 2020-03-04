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
  
  constructor(private _addressDeliveryService: AddressDeliverTimeService) {}

  ngOnInit() {
    this.addresses = this._addressDeliveryService.getAddress();
    this.timmings = this._addressDeliveryService.getTimmings();
  }
}
