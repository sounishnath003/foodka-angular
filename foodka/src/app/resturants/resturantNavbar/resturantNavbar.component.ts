import { Component, OnInit, Input } from "@angular/core";
import { AddressDeliverTimeService } from "src/app/services/addressDeliverTime.service";
import { MatDialog } from "@angular/material/dialog";
import { ScheduleDateComponent } from "src/app/scheduleDate/scheduleDate.component";
import { Address } from "src/app/models/address";
import { DeliveryTime } from "src/app/models/deliveryTime";
import { SnackbarrService } from 'src/app/services/snackbarr.service';
import { OrderHistoryComponent } from 'src/app/orderHistory/orderHistory.component';

@Component({
  selector: "app-resturantNavbar",
  templateUrl: "./resturantNavbar.component.html",
  styleUrls: ["./resturantNavbar.component.css"]
})
export class ResturantNavbarComponent implements OnInit {
  @Input() loggedUserName: string;
  public addresses: Address[];
  public timmings: DeliveryTime[];
  scheduleSlot: string = "";

  constructor(
    private _addressDeliveryService: AddressDeliverTimeService,
    private _matDialog: MatDialog,
    private _snackBar: SnackbarrService
  ) {}

  ngOnInit() {
    this.addresses = this._addressDeliveryService.getAddress();
    this.timmings = this._addressDeliveryService.getTimmings();
  }

  openDialog = (index: number) => {
    if (index == 1) {
      const diaLogRef = this._matDialog.open(ScheduleDateComponent, {
        width: "400px",
        data: {
          scheduleSlot: this.scheduleSlot,
          loggedUserName: this.loggedUserName
        }
      });

      diaLogRef.afterClosed().subscribe(res => {
        this.scheduleSlot = res;
        console.log(this.scheduleSlot);
      });
    } else {
      return;
    }
  };

  orderHistory = () => {
    this._matDialog.open(OrderHistoryComponent, {
      width: '820px'
    })
  };

  onLoggedOut() {
    setTimeout(() => {
      this._snackBar._snackBarPOP("You're succesfully logged out ", "DONE");
    }, 1100);
  }
}
