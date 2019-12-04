// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule} from './dashboard/dashboard.module';
import { DashboardComponent} from './dashboard/dashboard/dashboard.component';
import { LoginModule} from './login/login.module';
import { LoginComponent} from './login/login/login.component';
import { RegisterComponent} from './login/register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {SecurityInterceptorService} from "./services/security.interceptor.service";
import {AccountModule} from "./account/account.module";
import {AccountManagementComponent} from "./account/account-management/account-management.component";

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account-management', component: AccountManagementComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DashboardModule,
    LoginModule,
    AccountModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
