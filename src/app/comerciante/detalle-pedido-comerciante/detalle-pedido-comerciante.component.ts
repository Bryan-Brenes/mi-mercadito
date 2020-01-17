import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pedido-comerciante',
  templateUrl: './detalle-pedido-comerciante.component.html',
  styleUrls: ['./detalle-pedido-comerciante.component.css']
})
export class DetallePedidoComercianteComponent implements OnInit {

  nombre: string = "Rodrigo Zuñiga";
  telefono: string = "8745-1523";
  ubicacion: string = "De la escuela de paraiso 20 m este y 8 m sur, Paraíso, Cartago   Province, Costa Rica";

  constructor() { }

  ngOnInit() {
  }

}
