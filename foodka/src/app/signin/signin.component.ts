import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    public _formBuilder: FormBuilder,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [
        "",
        Validators.required,
        Validators.pattern("/^[a-z0-9_-]{3,16}$/gim")
      ]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [
        "",
        Validators.required,
        Validators.email,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ]
    });
  }

  open; //import {MatSnackBar} from '@angular/material';
  //constructor(public snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, {
      duration: 1500,
      panelClass: "blue"
    });
  }

  onSubmit = () => {
    let _username: string = this.firstFormGroup.controls["firstCtrl"].value;
    let _email: string = this.secondFormGroup.controls["secondCtrl"].value;

    console.log(_username);
    console.log(_email);

    

    this.openSnackBar("You'll be successfully logged in ", "UNDO");
  };
}
