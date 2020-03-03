import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(public _formBuilder: FormBuilder, private _snackbar: MatSnackBar) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required, Validators.email]
    });
  }

  open//import {MatSnackBar} from '@angular/material';
  //constructor(public snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, {
      duration: 1500,
      panelClass: 'blue'
    });
  }

  onSubmit = () => {
    this.openSnackBar("You'll be successfully logged in ", "UNDO")
  }


}
