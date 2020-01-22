import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SesionComercianteService } from 'src/app/servicios/sesion-comerciante.service';
import { ComercianteService } from 'src/app/servicios/comerciante.service';

@Component({
  selector: 'app-descripcion-producto-comerciante',
  templateUrl: './descripcion-producto-comerciante.component.html',
  styleUrls: ['./descripcion-producto-comerciante.component.css']
})
export class DescripcionProductoComercianteComponent implements OnInit {

  nombre: string;
  producto: string;
  descripcion: string;
  constructor(private route: ActivatedRoute, public sesionComerciante: SesionComercianteService, private comercianteService: ComercianteService) { }

  ngOnInit() {
    this.obtenerInformación();
    this.nombre = this.sesionComerciante.nombre;
  }

  private obtenerInformación() {
    var id = this.route.snapshot.paramMap.get('id');
    console.log('Entre a obtenerInformación');
    this.comercianteService.obtenerInfoProducto(this.sesionComerciante.email, id).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data[0]));
      console.log("Los datos son");
      console.log(data)
      this.producto = dato.nombre;
      this.descripcion = dato.descripcion;
    })
  }

  private eliminarProducto() {
    var id = this.route.snapshot.paramMap.get('id');
    console.log(this.nombre + id);
    //this.comercianteService.eliminarProductoInventario(this.nombre, id);
  }

}
