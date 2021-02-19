import { Component, OnInit } from '@angular/core';
import { SusuariosService } from '../../service/catalogo_usuarios/susuarios.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  conductores: any;
  con = {
    nombre: null,
    password: null,
    email: null,
    tipo:null,
    placas:null,
    modelo:null,
    celular:null,
    CURP:null
  }

  constructor(private susuarios: SusuariosService) { }

  ngOnInit(): void {
    this.obtenerconductores()
  }
  obtenerconductores() {
    this.susuarios.recuperarconductor().then((res: any) => {
      console.log(res);

      this.conductores = res.conductor;
    }).catch(erro => {
      console.log('Ha sucedido un error', erro);
    });
  }

  altacon(){
    this.susuarios.altacon(this.con).then((res:any)=>{
      console.log(res);
      localStorage.setItem('token', res.token);
      alert(res.msg);
      this.ngOnInit();
    }).catch(erro => {
      console.log(erro)
      alert('Ocurrio un error');

    });
  }
}
