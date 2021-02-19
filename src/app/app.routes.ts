import { Routes } from '@angular/router';
import { CusuariosComponent } from './components/cusuarios/cusuarios.component';
import { CmusuariosComponent } from './components/cmusuarios/cmusuarios.component';
import { LoginComponent } from '../app/login/login/login.component';
import {ConductorComponent} from './components/conductor/conductor.component'
import {UsuarioAventonComponent} from './components/usuario-aventon/usuario-aventon.component'
import {ComponentsComponent} from '../app/altacon/components/components.component'
import {AuthGuard} from './auth.guard';

export const Router: Routes = [
    {path: '', redirectTo:'/login',pathMatch:'full'},
    { path: 'cusuarios', component: CusuariosComponent, canActivate: [AuthGuard] },
    { path: 'cmusuarios', component: CmusuariosComponent,canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    {path: 'conductor', component: ConductorComponent },
    {path: 'usuario', component: UsuarioAventonComponent },
    {path: 'conalt', component: ComponentsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'clibros' }
]

