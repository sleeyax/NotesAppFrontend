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

  loggedIn : boolean;

  constructor(private authenticateService : AuthenticateService, private router: Router){
    this.authenticateService.isLoggedIn.subscribe(result =>{
      this.loggedIn=result
    });

    if(localStorage.getItem("token")!=null){
      this.loggedIn=true
    }
    else{
      this.loggedIn=false;
    }
  }

  logOut(){
    this.authenticateService.logOut()
    this.authenticateService.isLoggedIn.subscribe(result=>{
      this.loggedIn=result
    })
  }

  toLogin()
  {
    this.router.navigateByUrl("/register");
  }
}
