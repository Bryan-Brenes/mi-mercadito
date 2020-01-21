import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-pedidos-repartidor',
  templateUrl: './detalles-pedidos-repartidor.component.html',
  styleUrls: ['./detalles-pedidos-repartidor.component.css']
})
export class DetallesPedidosRepartidorComponent implements OnInit {

  //datos del cliente
  nombre: string = "Rodrigo Zuñiga";
  cedula: string = "14587895594";
  fechaNacimiento: string = "15-10-1989";
  telefono: string = "8745-1523";
  correo: string = "rodrigoZC2@gmail.com";
  ubicacion: string = "De la escuela de paraiso 20 m este y 8 m sur, Paraíso, Cartago   Province, Costa Rica";
  
  //detalles del pedido
  producto: string;
  comerciante: string;
  cantidad: string;
  unidadMediad: string;
  estado: boolean;

  constructor() { }

  ngOnInit() {
  }

}
