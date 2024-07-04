import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login/admin',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth-admin/auth.routes').then(m => m.AUTHADMIN_ROUTES)
    },
    {
        path: 'admin',
        loadChildren: () => import('./gestion/admin.routes').then(m => m.ADMIN_ROUTES)
    }
];