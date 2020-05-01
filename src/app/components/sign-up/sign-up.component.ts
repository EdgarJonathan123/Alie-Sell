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

  createCount(F: HTMLInputElement, M: HTMLInputElement) {

    this.user.genero = this.getGenero(F.checked, M.checked);
    console.log('Usuario data:', this.user);

    this.crudService.createCLient(this.user).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );

  }

  getGenero(f: boolean, m: boolean): string {

    let result: string = 'm';

    if (m == true) {
      result = 'm';
    } else if (f == true) {
      result = 'f';
    }


    return result
  }
}