import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarrService } from '../services/snackbarr.service';

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"]
})
export class AdminLoginComponent implements OnInit {
  uid: string = "admin";
  pwd: string = "admin";
  constructor(private _router: Router, private _snackBar: SnackbarrService ) {}

  ngOnInit(): void {}

  adminLogIn = new FormGroup({
    uid: new FormControl(null),
    pwd: new FormControl(null)
  });

  onSubmit() {
    if (
      this.adminLogIn.get("uid").value == this.uid &&
      this.adminLogIn.get("pwd").value == this.pwd
    ) {
      this._snackBar._snackBarPOP(
        "Welcome Admin to Portal 🎉🎉",
        "DONE"
      );
      this._router.navigateByUrl('dashboard')
    } else {
      this._snackBar._snackBarPOP("Admin Id / Password is incorrect! ☹", "DONE")
    }
    console.log();
  }
}
