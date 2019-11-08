import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserLogin } from '../models/user-login.model';
import { Router } from '@angular/router';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  isLoggedIn = new BehaviorSubject(false);

  constructor(private _httpClient: HttpClient, private router : Router) { }

  authenticate(userLogin: UserLogin): Observable<User> {

    //todo: URL AANPASSEN
    return this._httpClient.post<User>("https://localhost:44350/api/User/authenticate", userLogin);
  }

  logOut(){
    localStorage.removeItem("token");
    this.isLoggedIn.next(false);
  }
}
