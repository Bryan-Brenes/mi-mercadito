import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-afiliado',
  templateUrl: './perfil-afiliado.component.html',
  styleUrls: ['./perfil-afiliado.component.css']
})
export class PerfilAfiliadoComponent implements OnInit {

  nombre: string = "Alejandra Garzón Gutierrez";
  cedula: string = "301440541";
  fechaNacimiento: string = "31-10-1991";
  telefono: string = "8814-8491";
  correo: string = "aleGarzon10@gmail.com";
  ubicacion: string = "De la municipalidad de San Rafael 150 m Sur, San Rafael, Cartago   Province, Costa Rica";

  constructor() { }

  ngOnInit() {
  }

}
