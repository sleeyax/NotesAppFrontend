import { Component } from "@angular/core";
import {AuthenticateService} from "./services/authenticate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'notesAppFrontEnd';

  //todo: NgIf loggedIn aan html file toevoegen (enkel menu items showen na login)
  loggedIn : boolean;

  constructor(private authenticateService : AuthenticateService){
    this.authenticateService.isLoggedIn.subscribe(result=>{
      this.loggedIn=result
    })
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
}
