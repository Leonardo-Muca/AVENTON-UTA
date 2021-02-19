import { Component, OnInit } from '@angular/core';
import { SusuariosService } from '../../service/catalogo_usuarios/susuarios.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario ={
    email:null,
 password:null,
 tipo:null
  }
  tipo : any; 

memoria=0;
  constructor(private susuarios: SusuariosService, private rt: Router) { }

  ngOnInit(): void {
  }

  login(usuario){
    
    console.log(usuario)
    return this.susuarios.login(usuario).then((res:any) =>{
      console.log('token:',res.token);
      localStorage.setItem('token', res.token);
      this.tipo = res.usrDB.tipo;
      let nombre = res.usrDB.nombre;
      localStorage.setItem('nombre', nombre);
      console.log(this.tipo);
      
      if(this.tipo == 'Tipo 1') {
        this.rt.navigate(['/cusuarios'])
      }
      if(this.tipo == 'Tipo 2') {

        this.rt.navigate(['/conductor'])
      }
      if(this.tipo == 'Tipo 3') {
    
        this.rt.navigate(['/usuario'])
      }

      alert('Login correcto')
     
    }).catch(err =>{
      console.log(err.error);
      alert('Error al momento del login')
      this.memoria++;
      if(this.memoria == 3){
        alert('Usuario bloqueado, intente dentro de 30 segundos');
      }
    })
  }
}
