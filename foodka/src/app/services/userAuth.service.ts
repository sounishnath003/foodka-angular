import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserAuthService {
  private _userAuthData = new BehaviorSubject<string>("");
  currentUser = this._userAuthData.asObservable();

  constructor() {}

  updateUserData = (data: string) => {
    this._userAuthData.next(data) ;
  }

}
