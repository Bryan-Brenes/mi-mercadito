import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturacion-cliente',
  templateUrl: './facturacion-cliente.component.html',
  styleUrls: ['./facturacion-cliente.component.css']
})
export class FacturacionClienteComponent implements OnInit {

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
