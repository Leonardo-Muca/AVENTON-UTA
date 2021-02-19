import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// para hacer funcionar rutas
import { RouterModule } from '@angular/router';
import {Router} from './app.routes'

// Para trabajar con formularios
import { FormsModule } from '@angular/forms';
// Para trabajar con formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CusuariosComponent } from './components/cusuarios/cusuarios.component';

import { HttpClient, HttpClientModule,  HTTP_INTERCEPTORS} from '@angular/common/http';
import { CmusuariosComponent } from './components/cmusuarios/cmusuarios.component';
import { PasswordPipe } from './pipes/password.pipe';
import { LoginComponent } from './login/login/login.component';
import {TokenInterceptorService} from './service/token-interceptor.service'

import {AuthGuard} from './auth.guard';
import { ConductorComponent } from './components/conductor/conductor.component';
import { UsuarioAventonComponent } from './components/usuario-aventon/usuario-aventon.component';
import { ComponentsComponent } from './altacon/components/components.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CusuariosComponent,
    CmusuariosComponent,
    PasswordPipe,
    LoginComponent,
    ConductorComponent,
    UsuarioAventonComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Router),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
