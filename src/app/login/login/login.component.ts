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


  constructor(private susuarios: SusuariosService, private rt: Router) { }

  ngOnInit(): void {
  }

  login(usuario){
    
    console.log(usuario)
    return this.susuarios.login(usuario).then((res:any) =>{
      console.log('token:',res.token);
      localStorage.setItem('token', res.token);
      this.tipo = res.usrDB.tipo;
      console.log(this.tipo);
      
      if(this.tipo == 'Tipo 1') {
        this.rt.navigate(['/cusuarios'])
      }
      if(this.tipo == 'Tipo 2') {
        localStorage.clear();
        this.rt.navigate(['/conductor'])
      }
      if(this.tipo == 'Tipo 3') {
        localStorage.clear();
        this.rt.navigate(['/usuario'])
      }

      alert('Login correcto')
     
    }).catch(err =>{
      console.log(err.error);
      alert('Error al momento del login')
    })
  }
}
