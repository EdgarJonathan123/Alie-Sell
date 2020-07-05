import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { UserClient } from "../../models/UserData";
import { respuestServer} from '../../models/RespuestaServer';
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
  @ViewChild("genero") genero: ElementRef;

  user: UserClient = {
    NOMBRE: '',
    APELLIDO: '',
    CONTRASENIA: '',
    CORREO: '',
    TELEFONO: '',
    FOTOGRAFIA: '',
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

      this.user.ID = params.id;

      this.service.getClientById(params.id)
        .subscribe(
          (res: UserClient[]) => {

            this.user = res[0];

            if (this.user.GENERO == 'M') {
              this.render.setAttribute(this.genero.nativeElement, "value", "Masculino");
            } else {
              // console.log('Entro a femenino');s
              this.render.setAttribute(this.genero.nativeElement, "value", "Femenino");
            }
            // console.log('usuario: ',this.user);

          },
          (err) => {
            console.log("Error al editar un usuario: ", err);

          }

        );

    }
  }



  editUser(genero: HTMLInputElement) {

    // console.log('Estamos en editar usuario xd');
    // console.log('Genero Elegido ', genero.value);

    // this.toastr.success('Alerta con exito xd ');

    let camposValidos: boolean = true;

    this.user.GENERO = this.setGender(genero.value);
    if (this.estaVacia(this.user.NOMBRE)) {
      this.toastr.error('Error', 'El campo \"Nombre\" es obligatorio! ');
      camposValidos = false;
    }
    if (this.estaVacia(this.user.APELLIDO)) {
      this.toastr.error('Error', 'El campo \"Apellido\" es obligatorio! ');
    }
    if (this.estaVacia(this.user.CONTRASENIA)) {
      this.toastr.error('Error', 'El campo \"Contraseña\" es obligatorio! ');
      camposValidos = false;
    }

    if (this.estaVacia(this.user.CORREO)) {
      this.toastr.error('Error', 'El campo \"Correo\" es obligatorio! ');
      camposValidos = false;
    }

    if (!this.validateEmail(this.user.CORREO)) {
      this.toastr.error('Ingrese un correo valido!', 'Error');
      camposValidos = false;
    }

    if (camposValidos) {
      //aqui haremos el cambio a la base de datos 

      // console.log('Usuario: ',this.user);

      this.service.updateUser(this.user)
      .subscribe(
        (res:respuestServer) =>{
            this.toastr.success(res.message)
        },
        (err)=>{
          console.error(err);
        }
      );
    }

  }

  validateEmail(email: string): boolean {

    var re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var result:boolean = re.test(email);
    // console.log('Email: ',email);
    // console.log('Resultado del test: ', result);
    return result;
  }

  setGender(genero: string): string {

    if (genero == 'Masculino') {
      return 'm'
    } else {
      return 'f'
    }
  }

  estaVacia(atributo: string): boolean {

    if (atributo == '' || atributo == '\t' || atributo == '\n' || atributo == '\r') {
      return true;
    } else {
      return false;
    }
  }
}
