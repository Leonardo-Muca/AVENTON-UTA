import { Component, OnInit } from '@angular/core';
import {CusuariosComponent} from '../cusuarios/cusuarios.component'

@Component({
  selector: 'app-usuario-aventon',
  templateUrl: './usuario-aventon.component.html',
  styleUrls: ['./usuario-aventon.component.css']
})
export class UsuarioAventonComponent implements OnInit {
  pedir:boolean=false;
  usu = {
    nombre: null,
    password: null,
    email: null,
    tipo:null
  }
  constructor() { 
    this.usu.nombre = localStorage.getItem('nombre');
  }
  
  ngOnInit(): void {
  }

  pedirViaje(){
    this.pedir = true;
    console.log(this.pedir)
  }
}
