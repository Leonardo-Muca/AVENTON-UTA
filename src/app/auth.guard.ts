import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import {SusuariosService} from './service/catalogo_usuarios/susuarios.service';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private auth: SusuariosService, private rt: Router){}
  canActivate():boolean{
    if (this.auth.loggedIn()){
      return true;
    }
    this.rt.navigate(['/login'])
    return false;
  }
   
  
  
}
