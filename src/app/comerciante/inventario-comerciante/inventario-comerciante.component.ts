import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario-comerciante',
  templateUrl: './inventario-comerciante.component.html',
  styleUrls: ['./inventario-comerciante.component.css']
})
export class InventarioComercianteComponent implements OnInit {

  nombre: string = "Productos Fresquita";
  productos: Object[];

  constructor() { }

  ngOnInit() {
    this.productos = this.obtenerProductos();
  }

  private obtenerProductos(): Object[] {
    var productos = [];
    for (let i = 0; i < 10; i++) {
      productos.push({
        nombre: "Tomate"
      })
    }
    return productos;
  }
}
