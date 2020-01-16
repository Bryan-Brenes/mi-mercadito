import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-productos-cliente',
  templateUrl: './buscar-productos-cliente.component.html',
  styleUrls: ['./buscar-productos-cliente.component.css']
})
export class BuscarProductosClienteComponent implements OnInit {

  nombre: string = "Rodrigo Zuñiga";
  productos: Object[];

  constructor() { }

  ngOnInit() {
    this.productos = this.obtenerProductos();
  }


  private obtenerProductos(): Object []{
    var productos = [];
    for (let i = 0; i < 10; i++) {
        productos.push({
          nombre: "Productos fresquita",
          producto: "Cartón de huevos",
          precio: "350 kg"
        })
    }
    return productos;
  }

}
