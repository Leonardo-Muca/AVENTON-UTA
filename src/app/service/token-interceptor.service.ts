import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import {SusuariosService} from './catalogo_usuarios/susuarios.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private sa : SusuariosService) { }

  intercept(req, next){
    const tokenizeReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.sa.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

  
}
