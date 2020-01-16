import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-puestos-cliente',
  templateUrl: './ver-puestos-cliente.component.html',
  styleUrls: ['./ver-puestos-cliente.component.css']
})
export class VerPuestosClienteComponent implements OnInit {
  
  nombre: string = "Rodrigo Zuñiga";
  puestos: Object[];

  constructor() { }

  ngOnInit() {
    this.puestos = this.obtenerPuestos();
  }


  private obtenerPuestos(): Object []{
    var puestos = [];
    for (let i = 0; i < 10; i++) {
        puestos.push({
          nombre: "Productos fresquita" 
        })
    }
    return puestos;
  }


}
