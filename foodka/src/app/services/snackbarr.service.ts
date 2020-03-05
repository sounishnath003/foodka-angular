import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class SnackbarrService {
  constructor(private _snackBar: MatSnackBar) {}

  _snackBarPOP = (messeage: string, action: string) => {
    this._snackBar.open(messeage, action, {
      duration: 1500
    });
  };
}
