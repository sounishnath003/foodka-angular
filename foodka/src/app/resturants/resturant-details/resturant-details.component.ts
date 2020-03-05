import { Component, OnInit } from '@angular/core';
import { ResturantsDetailsService } from '../../services/resturants-details.service';

@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.css']
})
export class ResturantDetailsComponent implements OnInit {
  data:any={};
  constructor(private _resturantData:ResturantsDetailsService) { 
    this.data = this._resturantData.getResturantsData()[0];
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
