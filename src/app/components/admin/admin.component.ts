import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Cliente } from '../../models/UserData';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  Clientes:Cliente[]= [];

  constructor(
              private userService:UserService,
              private router:Router,
              private activedRoute:ActivatedRoute
            ){}



  ngOnInit(): void {


  
    this.getClients();

    for (let i = 0; i < 10; i++) {
     
      let cliente:Cliente = {
        IDUSUARIO: i,
        NOMBRE: 'nombre'+i,
        APELLIDO: 'apellido'+i,
        CONTRASENIA: 'contrasenia'+i,
        CORREO: 'correo'+i,
        TELEFONO: 'telefono'+i,
        FOTO: 'foto'+i,
        GENERO: 'genero'+i,
        FECHA_NACIMIENTO: 'fechaNacimiento'+i,
        FECHA_REGISTRO:'fechaRegistro'+i,
        DIRECCION: 'direccion'+i
  
      }

      this.Clientes.push(cliente);
      
    }

    console.log(this.Clientes);

  }



    getClient(client:Cliente){
       console.log('Cliente seleccionado', client);
       this.router.navigate(['/Admin/EditUser',client.IDUSUARIO]);
    }


  getClients(){

    this.userService.getCLients().subscribe((res:Cliente[])=>{


      for (let i = 0; i < res.length; i++) {
        this.Clientes.push(res[i]);
      }

    });
  
  }

}
