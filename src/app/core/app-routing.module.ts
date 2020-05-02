import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CRUDComponent } from "../components/crud/crud.component";
import { HomeComponent } from "../components/home/home.component";
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { AdminComponent } from '../components/admin/admin.component';
import { AuthGuard } from "../guards/auth.guard";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'crud',
    component: CRUDComponent
  },
  {
    path: 'Admin',
    component: AdminComponent//,
    //canActivate:[AuthGuard]
  },
  {
    path: 'SignIn',
    component: SignInComponent
  },
  {
    path: 'SignUp',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
