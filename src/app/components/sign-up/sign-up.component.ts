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



  dias: Number[] = [];
  meses: string[] = [];
  anios: Number[] = [];

  constructor(public crudService: UserService) { }

  ngOnInit(): void {

    for (let i = 1900; i < 2020; i++) {
      this.anios.push(i);
    }

    for (let i = 1; i < 31; i++) {
      this.dias.push(i);
    }

    this.meses.push("Enero");
    this.meses.push("Febrero");
    this.meses.push("Marzo");
    this.meses.push("Abril");
    this.meses.push("Mayo");
    this.meses.push("Junio");
    this.meses.push("Julio");
    this.meses.push("Agosto");
    this.meses.push("Septiembre");
    this.meses.push("Octubre");
    this.meses.push("Noviembre");
    this.meses.push("Diciembre");
  }

  crearCuenta(genero: HTMLInputElement, fechadia: HTMLInputElement, fechames: HTMLInputElement, fechaanio: HTMLInputElement) {

    //obteniendo la fecha  y el genero 
    this.user.fecha_nacimiento = this.getFecha(fechadia.value,fechames.value,fechaanio.value);
    this.user.genero = this.getGenero(genero.value);

    // console.log(this.user);

    this.crudService.createCLient(this.user).subscribe(
      res =>{
        console.log(res);
     },
     err => console.error(err)
    );

  }

  getGenero(genero:string):string{
    if(genero =="Masculino"){
        return 'm';
    }else{
      return 'f';
    }
  }

  getFecha(dia:string,mes:string,anio:string):string{
    var tempDia  = Number(dia);
    var tempMes  = Number(this.meses.indexOf(mes)+1);
    var tempAnio = Number(anio); 
    return tempDia+"/"+tempMes+"/"+tempAnio;
  }
}
