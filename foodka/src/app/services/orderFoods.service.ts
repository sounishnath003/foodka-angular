import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderFoodsService {
private orderFoods = new BehaviorSubject<any>('') ;
foodOrder: Observable<any> ;

constructor() { this.foodOrder = this.orderFoods.asObservable(); }

OrderFood(data) {
  console.log(data);
  this.orderFoods.next(data)
}

}
