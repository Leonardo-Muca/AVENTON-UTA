import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {
con={
nombre:null,
email:null,
password:null
}
  constructor() { 
    this.con.nombre = localStorage.getItem('nombre');
  }

  ngOnInit(): void {
  }

aceptar(){
    alert('Viaje aceptado con exito');
 }

negar(){
  alert('Viaje cancelado con exito');
}

}
