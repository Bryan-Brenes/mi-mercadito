import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  nombre: string = "Rodrigo Zuñiga";
  cedula: string = "14587895594";
  fechaNacimiento: string = "15-10-1989";
  telefono: string = "8745-1523";
  correo: string = "rodrigoZC2@gmail.com";
  ubicacion: string ="De la escuela de paraiso 20 m este y 8 m sur, Paraíso, Cartago   Province, Costa Rica";


  constructor() { }

  ngOnInit() {
  }

}
