import { Injectable } from '@angular/core';


export interface Address {
  icon: string;
  type: string;
  address: string;
}

export interface DeliveryTime {
  icon: string;
  value: string;
}


@Injectable({
  providedIn: 'root'
})
export class AddressDeliverTimeService {

constructor() { }

}
