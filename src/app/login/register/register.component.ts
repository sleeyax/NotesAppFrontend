import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {User} from '../../models/user.model';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private _api: ApiService) {
    this.registrationForm = new FormGroup({
      username: new FormControl('', {validators: [Validators.required, Validators.minLength(4)]}),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(5)]}),
      controlPassword: new FormControl('', { validators: [Validators.required]})
    });
  }

  ngOnInit() {}

  onRegisterFormSubmit()
  {
    // TODO: create user object and submit it using the api service
    //       if success, redirect to login page OR send another request to log the user in and redirect to dashboard instead
    //       if failed, show error message to the user
    const form = this.registrationForm.value;
    console.log(form);
    // const user = new User(form.firstName, form.lastName, form.email, form.password);
    // console.log(user);
    // ...
  }
}
