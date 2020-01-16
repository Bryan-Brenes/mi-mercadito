import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-detalle-puesto-cliente',
  templateUrl: './ver-detalle-puesto-cliente.component.html',
  styleUrls: ['./ver-detalle-puesto-cliente.component.css']
})
export class VerDetallePuestoClienteComponent implements OnInit {

  nombre: string = "Rodrigo Zúñiga";
  empresa: string = "Productos Fresquita"
  telefono: string = "8745-6725";
  correo: string = "fresquita-productos@gmail.com";
  ubicacion: string ="De la escuela de paraiso 20 m este y 8 m sur, Paraíso, Cartago   Province, Costa Rica";

  constructor() { }

  ngOnInit() {
  }

}
