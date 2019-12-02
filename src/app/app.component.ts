// @ts-ignore
import { Component } from "@angular/core";
import {AuthenticateService} from "./services/authenticate.service";
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'notesAppFrontEnd';

  loggedIn : boolean = false;

  constructor(private authenticateService : AuthenticateService, private router: Router) {
    this.authenticateService.isLoggedIn.subscribe(result =>{
      this.loggedIn=result
    });
  }

  logOut(){
    this.authenticateService.logOut();
    this.router.navigateByUrl('/login');
  }

  toLogin()
  {
    this.router.navigateByUrl("/register");
  }
}
