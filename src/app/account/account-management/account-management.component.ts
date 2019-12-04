import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";
import {getError} from "../../helpers";
import {AuthenticateService} from "../../services/authenticate.service";

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit {

  model = new User("", "", "", "");
  errorBool : boolean = false;
  errorMessage : string = "";
  currentId : number;

  constructor(private _api: ApiService, private _router : Router, private _authService: AuthenticateService) {
  }

  ngOnInit() {
    this.currentId = this._authService.user.id;
    this.model.firstName = this._authService.user.firstName;
    this._api.getUserByID(this.currentId).subscribe(res=>{
      this.model.lastName = res.lastName;
      this.model.email = res.email;
      this.model.password = res.password;
    });
  }

  onSubmit() {
    this.model.userID = this.currentId;
    this._api.updateUser(this.model).subscribe(result => {
        this._router.navigate(['/account-management']);
      },
      error =>{
        this.errorBool=true;
        //this.submitted=false;
        console.log(error);
        this.errorMessage = getError(error, "Editting the user failed, please try again.");
      }
    );
  }

  deleteAccount() {
    this._api.deleteUserByID(this.currentId).subscribe();
    this._router.navigate(['/register']);
  }
}
