import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-item-cuadricula',
  templateUrl: './item-cuadricula.component.html',
  styleUrls: ['./item-cuadricula.component.css']
})
export class ItemCuadriculaComponent implements OnInit {

  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() precio: string;
  @Input() boton: string;
  @Input() id: string;
  @Input() ruta: string;

  @Input() idProducto: number;


  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
  }

  public agregarCarrito() {
    this.carritoService.obtenerInfoProducto(this.idProducto).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      this.carritoService.agregarProducto(dato[0]);
      console.log(this.carritoService.productos)
    })
  }

}
