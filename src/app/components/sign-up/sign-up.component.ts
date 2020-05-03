import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserData } from '../../models/UserData';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: UserData = {
    nombre: '',
    apellido: '',
    contrasenia: '',
    correo: '',
    telefono: '',
    foto: '',
    genero: '',
    fecha_nacimiento: '',
    direccion: ''
  }



  constructor(public crudService: UserService) { }

  ngOnInit(): void {
  }

  createCount(genero: HTMLInputElement) {

    this.user.genero = this.getGenero(genero.value);
    console.log('Usuario data:', this.user);

    this.crudService.createCLient(this.user).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );

  }

  getGenero(genero: string): string {

    let result: string = 'm';

    if (genero == 'Masculino') {
      result = 'm';
    } else if (genero == 'Femenino') {
      result = 'f';
    }


    return result
  }
}