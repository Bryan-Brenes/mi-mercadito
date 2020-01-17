import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarepartidores',
  templateUrl: './listarepartidores.component.html',
  styleUrls: ['./listarepartidores.component.css']
})
export class ListarepartidoresComponent implements OnInit {

  public pedidos: Object[];
  constructor() { }

  ngOnInit() {
    this.pedidos = this.obtenerPedidos();
  }

  private obtenerPedidos(): Object[] {
    var lista = [];
    for (let i = 0; i < 15; i++) {
      lista.push({
        fecha: "01 ene 2020",
        monto: "2493"
      })
    }
    return lista;
  }
}
