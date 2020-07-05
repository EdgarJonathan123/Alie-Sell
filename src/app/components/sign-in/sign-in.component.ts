import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TipoCliente } from '../../models/tipoCLiente';
import { ROL } from '../../Constantes/Roles';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(
    private service: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }



  iniciar(correo: string, contrasenia: string) {
    console.log("correo: ", correo);
    console.log("contrasenia: ", contrasenia);



    this.service.existClient(correo, contrasenia)
      .subscribe(
        (res: TipoCliente) => {

          console.log(res.ROL);

          switch (res.ROL) {
            case ROL.Cliente:
              //aqui lo mandamos a la pagina principal de la tienda pero con sus datos de usuario
              console.log("Estamos en cliente");
              this.service.setUsuarioLocalStorage(correo,contrasenia);
              break;
            case ROL.Admin:
              //aqui mandamos a la pagina  dashboard del admin xd
              console.log("Estamos en admin");
              this.service.setUsuarioLocalStorage(correo,contrasenia);
              this.router.navigate(['/Admin']);
              break;
            case ROL.root:
              //aqui mandamos a la pagina de servicio 
              console.log("Estamos en usuario root");
              this.service.setUsuarioLocalStorage(correo,contrasenia);
              break;
          }

        },
        err => {
          console.log("Error: ", err);
        }
      );

  }

}
