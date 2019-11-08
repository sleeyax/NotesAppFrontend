// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../../models/user-login.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticateService} from "../../services/authenticate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model : UserLogin = new UserLogin("","");
  submitted : boolean = false;
  loggedIn : boolean;
  loginForm: FormGroup;
  error : boolean = false;
  errorMessage : string;

  constructor(private authenticateService : AuthenticateService, private router: Router) {
    this.authenticateService.isLoggedIn.subscribe(result=>{
      this.loggedIn=result
    })
  }

  ngOnInit() {
    if(localStorage.getItem('token') != null){
      this.loggedIn = true;
      console.log('aangemeld');
    }
    else{
      this.loggedIn=false;
      console.log("niet aangemeld");
    }

    this.loginForm = new FormGroup({
      username: new FormControl('', {validators: [Validators.required, Validators.minLength(4)]}),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(5)]})
    });
  }

  onSubmit() {
    this.submitted = true;
    this.authenticateService.authenticate(this.model).subscribe(result => {
        localStorage.setItem("token", result.token);
        this.authenticateService.isLoggedIn.next(true);
        this.router.navigate(['/'])
      },
      error =>{
        this.error=true;
        this.submitted=false;
        this.errorMessage = "Username or password incorrect."
      }
    );
  }
}

