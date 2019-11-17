import {Injectable} from '@angular/core';
import {AuthenticateService} from "./authenticate.service";
import {Router} from "@angular/router";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SecurityInterceptorService {

  constructor(private _router: Router, private _auth: AuthenticateService) {}

  /**
   * Intercept all requests and add a Authorization header if a token exists
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.token;

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }

    return next.handle(request).pipe(
      catchError(err => {
        // 401 unauthorized (invalid credentials)
        if (err.status === 401) {
          this._auth.logOut();
          this._router.navigate(['login']);
        }

        return throwError(err);
      }));
  }
}
