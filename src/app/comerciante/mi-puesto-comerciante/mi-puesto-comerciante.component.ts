import { Component, OnInit } from '@angular/core';
import { ComercianteService } from 'src/app/servicios/comerciante.service';
import { SesionComercianteService } from 'src/app/servicios/sesion-comerciante.service';

@Component({
  selector: 'app-mi-puesto-comerciante',
  templateUrl: './mi-puesto-comerciante.component.html',
  styleUrls: ['./mi-puesto-comerciante.component.css']
})
export class MiPuestoComercianteComponent implements OnInit {

  nombre: string;
  productos: any;

  constructor(private comercianteService: ComercianteService, public sesionComerciante: SesionComercianteService) { }


  ngOnInit() {
    this.nombre = this.sesionComerciante.nombre;
    this.obtenerProductos();
  }

  private obtenerProductos() {
    console.log("Entre a sacar los productos del puesto");
    this.comercianteService.obtenerProductosPuesto(this.sesionComerciante.email).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      this.productos = dato;
      console.log(this.productos);
    })
  }

}
