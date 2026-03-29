import { Routes } from '@angular/router';
import { LandingPage } from './componants/landing-page/landing-page';
import { Login } from './componants/login/login';
import { Signup } from './componants/signup/signup';
import { BlogDetails } from './componants/blog-details/blog-details';

export const routes: Routes = [
    {path:'', component:Login },
    { path: 'landing-page', component: LandingPage },
    { path: 'blog-detail/:id', component: BlogDetails },
    {path:'sign-up',component:Signup},  
    {path : '**' , redirectTo : ''}
];
