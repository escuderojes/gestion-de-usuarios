import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { ResetPasswordComponent } from './auth-admin/reset-password/reset-password.component';
import { LoginAdminComponent } from './auth-admin/login-admin/login-admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginAdminComponent, ResetPasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'techconnect-fronted-main';
  constructor(router: Router) {

  }
}