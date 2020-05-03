import { Component, OnInit, ViewChild , Renderer2, ElementRef} from '@angular/core';
import { Cliente } from "../../models/UserData";
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {

  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild("genero")genero:ElementRef;

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
    private activedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private render: Renderer2
  ) { }

  ngOnInit(): void {

    this.toastr.overlayContainer = this.toastContainer;

    // Sirve para ver si nos pasaron un id como parametro 
    // ejemplo http://juego/5

    /**
     *  @param  params  capturo el id si es que existe
     * 
     */
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.service.getClientById(params.id)
        .subscribe(

          (res: Cliente[]) => {

            this.user = res[0];

            if(this.user.GENERO=='m'){
              this.render.setAttribute(this.genero.nativeElement,"value","Masculino");
            }else{

              this.render.setAttribute(this.genero.nativeElement,"value","Femenino");
            }
            // console.log('usuario: ',this.user);

          },
          (err) => {
            console.log("Error al editar un usuario: ", err);

          }
          
        );

      // this.gamesService.getGame(params.id).subscribe(
      //    res =>{
      //       this.game = res;
      //       this.edit = true;
      //    },
      //    err => console.error(err)
      // );
    }
  }



  editUser(genero: HTMLInputElement) {

    console.log('Estamos en editar usuario xd');
    console.log('Genero Elegido ', genero.value);

    this.toastr.success('Alerta con exito xd ');
  }

}
