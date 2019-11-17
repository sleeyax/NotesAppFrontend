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
  error : boolean = false;
  errorMessage : string;

  constructor(private authenticateService : AuthenticateService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    this.authenticateService.authenticate(this.model, _ => {
      console.log('logged in');
      this.router.navigate(['/']);
    }, err => {
      console.error(err);
      this.error = true;
      this.submitted = false;
      this.errorMessage = "email or password incorrect.";
    });
  }
}

