import { Component, OnInit } from '@angular/core';
import { ComercianteService } from 'src/app/servicios/comerciante.service';
import { SesionComercianteService } from 'src/app/servicios/sesion-comerciante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto-mi-puesto-comerciante',
  templateUrl: './agregar-producto-mi-puesto-comerciante.component.html',
  styleUrls: ['./agregar-producto-mi-puesto-comerciante.component.css']
})
export class AgregarProductoMiPuestoComercianteComponent implements OnInit {

  nombre: string;


  productoNuevo: string;
  cantidad: string;
  montokg: string;
  montounidad: string;


  constructor(private comercianteService: ComercianteService, public sesionComerciante: SesionComercianteService, private router: Router) { }

  ngOnInit() {
    this.nombre = this.sesionComerciante.nombre;
  }

  enviarProducto() {
    if (this.productoNuevo != undefined || this.cantidad != undefined || this.montokg != undefined || this.montounidad != undefined) {
      var json = {
        idProducto: this.productoNuevo,
        idComerciante: this.sesionComerciante.email,
        cantidad: this.cantidad,
        montoKg: this.montokg,
        montoUnidad: this.montounidad
      }
      console.log("Esto es lo que voy a agregar al puesto")
      console.log(json)
      this.comercianteService.agregarProductoPuesto(json).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/comerciante/miPuesto');
      })
    }
  }

}
