import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CusuariosComponent } from './components/cusuarios/cusuarios.component';
import { CmusuariosComponent } from './components/cmusuarios/cmusuarios.component';
import { LoginComponent } from '../app/login/login/login.component';

 export const routes: Routes = [
  {path: '', redirectTo:'/login',pathMatch:'full'},
    { path: 'cusuarios', component: CusuariosComponent },
    { path: 'cmusuarios', component: CmusuariosComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'clibros' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
