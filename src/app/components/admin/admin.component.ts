import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Cliente , tableData} from '../../models/UserData';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  Clientes:Cliente[]=[];
  clienteHeader:tableData = {
    idusuario: false,
    nombre: true,
    apellido: true,
    contrasenia: false,
    correo: true,
    telefono: true,
    foto: false,
    genero: true,
    fecha_nacimiento: false,
    fecha_registro:false,
    direccion: true

  }

  constructor(
              private userService:UserService
            ){}



  ngOnInit(): void {


  }



  getClients(){

    this.userService.getCLients().subscribe((res:Cliente[])=>{

      this.Clientes = res;

      console.log('Usuarios: ', res);

    });
  
  }

}
