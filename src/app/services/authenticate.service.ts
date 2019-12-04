import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserLogin} from '../models/user-login.model';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(this.token != null);

  constructor(private _api: ApiService) { }

  authenticate(userLogin: UserLogin, onSuccess?: Function, onError?: Function) {
    this._api.login(userLogin).subscribe(res => {
      if (!res.token) throw 'Token not found in response body!';

      console.log('logged in - Token: ' + res.token);
      localStorage.setItem('token', res.token);
      this.isLoggedIn.next(true);
      onSuccess(res);
    }, err => onError(err));
  }

  logOut() {
    localStorage.removeItem("token");
    this.isLoggedIn.next(false);
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Get JWT payload data, which contains user details
   */
  get user(): { firstName: any; lastName: any; email: any; id: any } {
    const token = this.token;

    try {
      const splitted = token.split('.');
      const payload = JSON.parse(atob(splitted[1]));

      return {
        id: payload['id'],
        firstName: payload['firstName'],
        lastName: payload['lastName'],
        email: payload['email'],
      };
    } catch (e) {
      throw 'Failed to parse JWT!';
    }
  }
}
