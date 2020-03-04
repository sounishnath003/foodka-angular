import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AddressDeliverTimeService {
  constructor() {}

  getAddress = () => {
    return [
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
  };

  getTimmings = () => {
    return [
      {
        icon: "schedule",
        value: "Delivery Now"
      },
      {
        icon: "date_range",
        value: "Schedule for later"
      }
    ];
  };
}
