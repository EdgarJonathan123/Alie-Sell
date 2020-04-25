import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { UserService } from './services/user.service';

import { AppRoutingModule } from './core/app-routing.module';

//---- Angular Material
import { CustomMaterialModule } from './core/material.module';

//---- Componentes
import { AppComponent }       from './app.component';
import { CRUDComponent }      from './components/crud/crud.component';
import { HomeComponent }      from './components/home/home.component';
import { LoginComponent }     from './components/login/login.component';
import { SignInComponent }    from './components/sign-in/sign-in.component';
import { SignUpComponent }    from './components/sign-up/sign-up.component';
import { RegisterComponent }  from './components/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    CRUDComponent,
    HomeComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
