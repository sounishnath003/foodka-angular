import { Component, OnInit } from "@angular/core";
import { ResturantsDetailsService } from "../../services/resturants-details.service";
import { MatDialog } from "@angular/material/dialog";
import { OfferDetailsComponent } from "src/app/offerDetails/offerDetails.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-resturant-details",
  templateUrl: "./resturant-details.component.html",
  styleUrls: ["./resturant-details.component.css"]
})
export class ResturantDetailsComponent implements OnInit {
  data: any = {};
  resturantID: number;
  allResturants: {};
  id:number;
  constructor(
    private _resturantData: ResturantsDetailsService,
    private _openDialog: MatDialog,
    private _activeRouter: ActivatedRoute
  ) {
    this._activeRouter.params.subscribe(param=>{
      this.id = param.id;
      console.log(this.id)
    })
    this.data = this._resturantData.getResturantsData()[--this.id]
    console.log(this.data)
  }

  ngOnInit(): void {
    // this._microServices() ;
  }

  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.data = undefined;
  //   this.data = {};
  // }


  // _microServices = () => {
  //   this.allResturants = this._resturantData.getResturantsData();
  //   this._activeRouter.params.subscribe(res => (this.resturantID = res.id));
  //   console.log(this.resturantID);
  //   try {
  //     this.data = this._resturantData.getResturantById(this.resturantID);
  //     // console.log(this.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  openOfferDeatails() {
    this._openDialog.open(OfferDetailsComponent, {
      width: "420px"
    });
  }
}
