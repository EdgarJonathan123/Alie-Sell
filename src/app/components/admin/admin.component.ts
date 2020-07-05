import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserClient } from '../../models/UserData';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  Clientes: UserClient[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }



  ngOnInit(): void {

    this.getClients();

    // for (let i = 0; i < 10; i++) {
    //   let cliente: UserClient = {
    //     ID: i,
    //     NOMBRE: 'nombre' + i,
    //     APELLIDO: 'apellido' + i,
    //     CONTRASENIA: 'contrasenia' + i,
    //     CORREO: 'correo' + i,
    //     TELEFONO: 'telefono' + i,
    //     FOTOGRAFIA: 'foto' + i,
    //     GENERO: 'genero' + i,
    //     FECHA_NACIMIENTO: 'fechaNacimiento' + i,
    //     FECHA_REGISTRO: 'fechaRegistro' + i,
    //     DIRECCION: 'direccion' + i
    //   }
    //   this.Clientes.push(cliente);
    // }
    console.log(this.Clientes);
  }

  getClient(client: UserClient) {
    console.log('Cliente seleccionado', client);
    this.router.navigate(['/Admin/EditUser', client.ID]);
  }

  cerrarSession()
  {
    this.userService.logout();

    
  }

  getClients() {
    this.userService.getCLients().subscribe((res: UserClient[]) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
       var  genero: string = res[i].GENERO;

       if(genero=="M")
       {
          res[i].GENERO = "Masculino";
       }else
       {
          res[i].GENERO = "Femenino";
       }

        this.Clientes.push(res[i]);
      }
    });

  }

}
