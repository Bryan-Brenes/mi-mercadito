import { Component, OnInit } from '@angular/core';
import { ComercianteService } from 'src/app/servicios/comerciante.service';
import { SesionComercianteService } from 'src/app/servicios/sesion-comerciante.service';

@Component({
  selector: 'app-inventario-comerciante',
  templateUrl: './inventario-comerciante.component.html',
  styleUrls: ['./inventario-comerciante.component.css']
})
export class InventarioComercianteComponent implements OnInit {

  nombre: string;
  productos: any;

  constructor(private comercianteService: ComercianteService, public sesionComerciante: SesionComercianteService) { }

  ngOnInit() {
    this.obtenerProductos();
    this.nombre = this.sesionComerciante.nombre;
  }

  private obtenerProductos() {
    this.comercianteService.obtenerInventario(this.sesionComerciante.email).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      this.productos = dato;
      console.log(this.productos);
    })
  }
}
