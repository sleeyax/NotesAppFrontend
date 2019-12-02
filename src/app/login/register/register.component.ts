import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {User} from '../../models/user.model';
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";
import {getError} from "../../helpers";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  errorBool : boolean = false;
  errorMessage : string = "";

  constructor(private _api: ApiService, private _router : Router) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', {validators: [Validators.required]}),
      lastName: new FormControl('', {validators: [Validators.required]}),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(5)]}),
      controlPassword: new FormControl('', { validators: [Validators.required]})
    });
  }

  ngOnInit() {}

  onRegisterFormSubmit()
  {
    const form = this.registrationForm.value;
    console.log(form);

    const user = new User(form.email, form.firstName, form.lastName, form.password);
    this._api.createUser(user).subscribe(result => {
        this._router.navigate(['/login']);
      },
      error =>{
        this.errorBool=true;
        //this.submitted=false;
        console.log(error);
        this.errorMessage = getError(error, "Registration failed, please try again.");
      }
    );

    console.log(user);
  }
}
