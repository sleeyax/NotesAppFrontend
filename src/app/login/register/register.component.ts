import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      username: new FormControl('', {validators: [Validators.required, Validators.minLength(4)]}),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(5)]}),
      controlPassword: new FormControl('', { validators: [Validators.required]})
    });
  }

  onRegistrate()
  {
    user: User;
    if (this.registrationForm)
    console.log("joow");
  }

}
