import { Injectable } from '@angular/core';
import {UserLogin} from "../models/user-login.model";
import {HttpClient} from "@angular/common/http";
import {TokenResponse} from "../models/token-response.model";
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private readonly _url: string = 'http://127.0.0.1:8080';
  private readonly _url: string = 'https://helpless-wombat-90.localtunnel.me';
  private readonly _services = {
    auth: 'auth',
    edge: 'listings'
  };

  constructor(private _httpClient: HttpClient) { }

  /**
   * Log user in
   * @param userLogin
   */
  login(userLogin: UserLogin): Observable<TokenResponse> {
    return this._httpClient.post<TokenResponse>(`${this._url}/${this._services.auth}/login`, userLogin);
  }

  /**
   * Add a new user
   * @param user
   */
  createUser(user: User): Observable<User> {
    return this._httpClient.post<User>(`${this._url}/${this._services.auth}/users/add`, user);
  }
}
