import { Routes } from '@angular/router';
import { LandingPage } from './componants/landing-page/landing-page';
import { Login } from './componants/login/login';

export const routes: Routes = [
    {path:'', component:Login },
    { path: 'LandingPage', component: LandingPage }
];
