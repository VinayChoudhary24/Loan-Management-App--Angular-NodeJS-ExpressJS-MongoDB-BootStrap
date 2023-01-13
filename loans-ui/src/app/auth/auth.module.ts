import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    NewUserComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
