import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CRUDComponent } from "../components/crud/crud.component";
import { HomeComponent } from "../components/home/home.component";
import { LoginComponent } from "../components/login/login.component";
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { RegisterComponent} from '../components/register/register.component';
import { AuthGuard } from "../guards/auth.guard";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'crud',
    component: CRUDComponent//,
    //canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'SignIn',
    component: SignInComponent
  },
  {
    path: 'SignUp',
    component: SignUpComponent
  },
  {
    path: 'Reg',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
