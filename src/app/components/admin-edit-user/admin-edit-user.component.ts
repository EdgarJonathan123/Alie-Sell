import { Component, OnInit } from '@angular/core';
import { Cliente } from "../../models/UserData";
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {



  user: Cliente = {
    NOMBRE: '',
    APELLIDO: '',
    CONTRASENIA: '',
    CORREO: '',
    TELEFONO: '',
    FOTO: '',
    GENERO: '',
    FECHA_NACIMIENTO: '',
    DIRECCION: ''
  }

  constructor(
    private service: UserService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {



    // Sirve para ver si nos pasaron un id como parametro 
    // ejemplo http://juego/5

    /**
     *  @param  params  capturo el id si es que existe
     * 
     */
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.service.getClientById(params.id)
        .subscribe((res: Cliente[]) => {

          this.user= res[0];
          // console.log('usuario: ',this.user);

        },
          err => {
            console.log("Error Al editar un usuario: ", err);
          });

      // this.gamesService.getGame(params.id).subscribe(
      //    res =>{
      //       this.game = res;
      //       this.edit = true;
      //    },
      //    err => console.error(err)
      // );
    }
  }



  editUser() {

    console.log('Estamos en editar usuario xd');
  }

}
