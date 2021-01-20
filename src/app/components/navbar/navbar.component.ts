import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private rt : Router) { }

  ngOnInit(): void {
  }
cerrarSesion(){
  localStorage.clear();
  this.rt.navigate(['/login'])
}
}
