import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserClient } from '../../models/UserData';
import { respuestServer } from '../../models/RespuestaServer';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

  Clientes: UserClient[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private render: Renderer2
  ) { }



  ngOnInit(): void {

    this.toastr.overlayContainer = this.toastContainer;

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
    this.router.navigate(['/Admin/EditUser', client.ID]);
  }

  deleteUser(client: UserClient)
  {
    var id:number = client.ID;
    this.userService.deleteUser(id).subscribe(
      (res:respuestServer) => {
        this.toastr.success(res.message);
        this.router.navigate(['/Admin']);
      },
      (err) => {
        console.log("Error al eliminar  ", err);
      }
      
    );  
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
