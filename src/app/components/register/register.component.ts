import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { UserData } from '../../models/UserData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  user:UserData ={
    nombre: '',
    apellido: '',
    contrasenia: '',
    correo: '',
    telefono: '',
    foto: '',
    genero: '',
    fecha_nacimiento: '',
    direccion: ''
  };


  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["/"]);
    } else {
      alert("Invalid credentials");
    }

  }


}