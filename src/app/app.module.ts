//-----Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//-------toastr
import { ToastContainerModule,ToastrModule } from 'ngx-toastr';

import { UserService } from './services/user.service';
import { AppRoutingModule }         from './core/app-routing.module';
//---- Componentes
import { AppComponent }             from './app.component';
import { CRUDComponent }            from './components/crud/crud.component';
import { HomeComponent }            from './components/home/home.component';
import { SignInComponent }          from './components/sign-in/sign-in.component';
import { SignUpComponent }          from './components/sign-up/sign-up.component';
import { AdminComponent }           from './components/admin/admin.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';



@NgModule({
  declarations: [
    AppComponent,
    CRUDComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    AdminComponent,
    AdminEditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:'inline'}),
    ToastContainerModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
