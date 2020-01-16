import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-comerciante',
  templateUrl: './perfil-comerciante.component.html',
  styleUrls: ['./perfil-comerciante.component.css']
})
export class PerfilComercianteComponent implements OnInit {

  nombre: string = "Productos Fresquita";
  telefono: string = "8745-6325";
  correo: string = "fresquita-productos@gmail.com";
  ubicacion: string = "De la municiplaidad de paraiso 200 m este y 400 m sur, Paraíso, Cartago Province, Costa Rica";

  constructor() { }

  ngOnInit() {
  }

}
