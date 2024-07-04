import { Routes } from '@angular/router';

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

export const AUTHADMIN_ROUTES: Routes = [
    { path: 'login/admin', component: LoginAdminComponent },
    { path: 'reset/password/:token', component: ResetPasswordComponent },
    { path: 'forgot/password', component: ForgotPasswordComponent }
];