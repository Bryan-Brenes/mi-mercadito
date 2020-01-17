import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-compra-cliente',
  templateUrl: './detalle-compra-cliente.component.html',
  styleUrls: ['./detalle-compra-cliente.component.css']
})
export class DetalleCompraClienteComponent implements OnInit {

  public itemes: Object[];

  constructor() { }

  ngOnInit() {
    this.itemes = this.getItemes();
  }

  private getItemes(): Object[] {
    var itemesCompra = [];
    for (let i = 0; i < 10; i++) {
      itemesCompra.push({
        nombre: "Aguacate",
        cantidad: 3,
        precio: 2493
      })

    }
    return itemesCompra;
  }

}
