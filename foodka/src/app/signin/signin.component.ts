import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserAuthService } from "../services/userAuth.service";
import { SnackbarrService } from '../services/snackbarr.service';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  username: string;

  constructor(
    public _formBuilder: FormBuilder,
    private _userAuthdata: UserAuthService,
    private _snackBar: SnackbarrService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [
        "",
        [Validators.required, Validators.pattern("^[a-zA-Z]+[-'s]?[a-zA-Z ]+$")]
      ]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          )
        ]
      ]
    });

    this._userAuthdata.currentUser.subscribe(
      message => (this.username = message)
    );
  }


  onSubmit = () => {
    let _username: string = this.firstFormGroup.controls["firstCtrl"].value;
    let _email: string = this.secondFormGroup.controls["secondCtrl"].value;

    console.log(_username);
    console.log(_email);

    this._userAuthdata.updateUserData(_username);

    setTimeout(() => {
      this._snackBar._snackBarPOP("You're successfully logged in 🎉 ", "UNDO");
    }, 1010);
  };
}
