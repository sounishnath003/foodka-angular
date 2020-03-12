import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"]
})
export class AdminLoginComponent implements OnInit {
  uid: string = "admin";
  pwd: string = "admin";
  constructor(private _routerLink: RouterLink) {}

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
      alert("You're in admin portal 🎈");
    } else {
      alert("Admin id or Password incorrect ☹");
      // this._routerLink.
    }
    console.log();
  }
}
