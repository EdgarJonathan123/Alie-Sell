import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TipoCliente } from '../../models/tipoCLiente';
import { userRol } from '../../Constantes/Roles';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  iniciar(correo: string, contrasenia: string) {
    console.log("correo: ", correo);
    console.log("contrasenia: ", contrasenia);



    this.service.existClient(correo, contrasenia)
      .subscribe(
        (res: TipoCliente) => {

          switch (res.TIPO_CLIENTE) {
            case userRol.Cliente:
              //aqui lo mandamos a la pagina principal de la tienda pero con sus datos de usuario
              break;
            case userRol.Admin:
              //aqui mandamos a la pagina  dashboard del admin xd
              break;
            case userRol.Servicio:
              //aqui mandamos a la pagina de servicio 
              break;

          }

        },
        err => {
          console.log("Error: ", err);
        }
      );

  }

}
