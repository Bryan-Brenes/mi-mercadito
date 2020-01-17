import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizar-repartidor',
  templateUrl: './actualizar-repartidor.component.html',
  styleUrls: ['./actualizar-repartidor.component.css']
})
export class ActualizarRepartidorComponent implements OnInit {

  nombre: string = "Pedro";
  apellidos: string = "Ramirez Villalobos";
  telefono: string = "2222-2222";
  correo: string = "pedroramirez@gmail.com";
  fecha: string = "02/10/1980";
  IBAN: string = "124-1451-22-123456789"

  constructor() { }

  ngOnInit() {
  }

}
