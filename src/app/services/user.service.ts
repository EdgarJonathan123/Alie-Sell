/**
 * @packageDocumentation
 * Este documento se encarga de conectar con el servidor backend
 * creado con nodejs, se crea constantes para los  endpoints
 * 
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { UserInterface } from '../models/user-interface';
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";
import { UserLogin } from '../models/userLogin';

import { UserData, UserClient } from '../models/UserData';
@Injectable({
  providedIn: 'root'
})

export class UserService {


  URL_USER = 'http://192.168.1.13:3000/user';
  constructor(private http: HttpClient, private router: Router) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })



  /**
   * Se crea un usuario con rol de cliente
   * @param user datos del usuario
   */
  createCLient(user: UserData) {
    return this.http.post(this.URL_USER + "/createClient", user, { headers: this.headers });
  }

  /**
   * Actuliza los campos de un usuario
   * @param client  El objeto por el cual se va a cambiar el cliente
   */
  updateUser(client: UserClient) {
    console.log('cliente: ', client.ID);
    const url = this.URL_USER + "/updateUser";
    return this.http.put(url, client, { headers: this.headers });

  }


  /**
   * Pregunta si existe algun cliente 
   * que coinciada con el mismo numero de correo 
   * y contrasenia
   * @param correo 
   * @param contrasenia 
   */
  existClient(correo: string, contrasenia: string) {
    return this.http.post(
      this.URL_USER + "/existClient",
      {
        "contrasenia": contrasenia,
        "correo": correo
      },
      { headers: this.headers }
    ).pipe(map(data => data));

  }


  /**
   * @returns   Los usuarios con rol de cliente
   */
  getCLients() {
    return this.http.get(this.URL_USER + "/getUsers");
  }


  /**
   * Obtiene Un usuario con rol cliente dado un id  
   * @param id Id con el cual identificaremos al usuario
   *           para ir a traerlo 
   */
    getClientById(id: number) {
    return this.http.get(this.URL_USER + "/getUsers/" + id)
      .pipe(map(data => data));
  }


  /**
   * @summary  Guarda en el local correo y contrasena del usuario
   *           para saber quien ha iniciado session.
   * 
   * @param correo  identificador del usuario
   * @param contra  idenfificador del usuario
   * 
   */
  setUsuarioLocalStorage(correo: string, contra: string) {

    const user: UserLogin = {
      correo: correo,
      contrasenia: contra
    }

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
  


  //******************************************************************************
  //******************************************************************************
  //*****************Metodos Usados en el ejemplo xd *****************************
  //******************************************************************************
  //******************************************************************************

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


  //TODO: LOGOUT
  logout() {
    console.log("Cerrando session");
    localStorage.removeItem("UsuarioLogueado");
    this.router.navigate(['/SignIn']);
  }
}
