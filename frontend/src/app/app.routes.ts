import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Registration } from './pages/registration/registration';


export const routes: Routes = [
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: Login },
    { path: 'register', component: Registration },
];
