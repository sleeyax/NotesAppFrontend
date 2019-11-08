// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../../models/user-login.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model : UserLogin = new UserLogin("","");
  submitted : boolean = false;
  aangemeld : boolean;
  loginForm: FormGroup;
  fout : boolean = false;
  foutmelding : string;

  constructor(){}
  // constructor(private authenticateService : AuthenticateService, private router: Router) {
  //   this.authenticateService.isAangemeld.subscribe(result=>{
  //     this.aangemeld=result
  //   })
  // }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', {validators: [Validators.required, Validators.minLength(4)]}),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(5)]})
    });

    // if(localStorage.getItem('token') != null){
    //   this.aangemeld = true;
    //   console.log('aangemeld');
    // }
    // else{
    //   this.aangemeld=false;
    //   console.log("niet aangemeld");
    // }
  }

  onSubmit() {
    this.submitted = true;
    // this.authenticateService.authenticate(this.model).subscribe(result => {
    //     localStorage.setItem("token", result.token);
    //     this.authenticateService.isAangemeld.next(true);
    //     this.router.navigate(['/'])
    //   },
    //   error =>{
    //     this.fout=true;
    //     this.submitted=false;
    //     this.foutmelding = "Username or password incorrect."
    //   }
    // );
  }
}

