import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, Form } from '@angular/forms';
import { SusuariosService } from '../../service/catalogo_usuarios/susuarios.service';

@Component({
  selector: 'app-cusuarios',
  templateUrl: './cusuarios.component.html',
  styles: [
  ]
})
export class CusuariosComponent implements OnInit {

  // variable para almacenar formulario
  form: FormGroup;
  formData: FormData;
  response: any = [];
  submited: boolean = false;

  idUsuario: String;
  

  usu = {
    nombre: null,
    password: null,
    email: null,
    tipo:null
  }

  usuarios: any;

  mostrarActualizar: Boolean = false;
  mostrarRegistrar: Boolean = false;

  constructor(private susuarios: SusuariosService, private fB: FormBuilder) {
  }

  ngOnInit(): void {

    this.obtenerUsuarios();

  }

  obtenerUsuarios() {
    this.susuarios.recuperarusuarios().then((res: any) => {
      console.log(res);

      this.usuarios = res.usuarios;
    }).catch(erro => {
      console.log('Ha sucedido un error', erro);
    });
  }

  mostrarAgregar() {
    this.mostrarRegistrar = true;
    this.mostrarActualizar = false;
  }

  altauser(forma: NgForm) {
    console.log(this.usu)

    this.susuarios.altauser(this.usu).then((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      alert(res.msg);
      forma.reset();
      this.ngOnInit();
      this.mostrarRegistrar = false;
    }).catch(erro => {
      console.log(erro)
      alert('Ocurrio un error');

    });
  }

  eliminarID(id: any) {
    this.susuarios.desactivarusu(id).then((resp: any) => {
      alert(resp.msg)
      this.ngOnInit();
    }).catch((err) => {
      console.log(err);

    });

  }

  actualizarID(id: any) {
    console.log(id);
    this.idUsuario = id;
    this.mostrarActualizar = false;
    this.mostrarActualizar = true;
    this.mostrarRegistrar = false;
  }

  addOther() {
    this.submited = false;
    this.form.reset();
  }

}
