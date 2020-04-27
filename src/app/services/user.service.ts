import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { UserInterface } from '../models/user-interface';
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";
import { UserLogin } from '../models/userLogin';

import { UserData } from '../models/UserData';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_USER = 'http://192.168.1.11:3000/user';

  constructor(private http: HttpClient, private router: Router) { }


  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  createCLient(user: UserData) {
    return this.http.post(this.URL_USER + "/createClient", user, { headers: this.headers });
  }

  existClient(correo:string, contrasenia:string) {

    return this.http.post(
      this.URL_USER + "/existClient",
      {
        "contrasenia": contrasenia,
        "correo": correo
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  //TODO: SET CURRENT USER
  setUsuarioLocalStorage(correo: string, contra: string) {

    const user: UserLogin = {
      correo: correo,
      contrasenia: contra
    }

    let user_string = JSON.stringify(user);
    localStorage.setItem('UsuarioLogueado', user_string);
  }



  //TODO: GET USERS
  GetUsers() {
    const url = "http://localhost:3000/getUsers";
    return this.http.get(url);
  }

  //TODO: INSERT USERS
  InsertUser(username: string, firstname: string, lastname: string) {
    const url = "http://localhost:3000/addUser"
    return this.http.post(
      url,
      {
        "username": username,
        "firstname": firstname,
        "lastname": lastname
      },
      { headers: this.headers }
    ).pipe(map(data => data));

  }


  //TODO:UPDATE USER
  UpdateUser(codu: string, username: string, firstname: string, lastname: string) {
    const url = "http://localhost:3000/updateUser";

    return this.http.put(
      url,
      {
        "codu": codu,
        "username": username,
        "firstname": firstname,
        "lastname": lastname

      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }



  //TODO: DELETE USER

  DeleteUser(codu) {
    const url = "http://localhost:3000/deleteUser/" + codu;
    return this.http.delete(url).pipe(map(data => data));
  }


  //TODO: LOGIN


  Login(username) {
    const url = "http://localhost:3000/signUp";

    return this.http.post(url,
      {
        "username": username
      }
      , { headers: this.headers })
      .pipe(map(data => data));
  }


  setCurrentUser(user: UserInterface) {
    let user_string = JSON.stringify(user);
    localStorage.setItem('UsuarioLogueado', user_string);
  }

  //TODO: GET CURRENT USER
  getCurrentUser() {
    let userCurrent = localStorage.getItem('UsuarioLogueado');
    if (!isNullOrUndefined(userCurrent)) {
      let user_json = JSON.parse(userCurrent);
      return user_json;
    } else {
      return null;
    }
  }

  //TODO: LOGOUT
  logout() {
    localStorage.removeItem("UsuarioLogueado");
    this.router.navigate(['/login']);
  }
}
