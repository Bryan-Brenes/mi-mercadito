import { Component, OnInit } from '@angular/core';
import { ComercianteService } from 'src/app/servicios/comerciante.service';
import { SesionComercianteService } from 'src/app/servicios/sesion-comerciante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto-comerciante',
  templateUrl: './agregar-producto-comerciante.component.html',
  styleUrls: ['./agregar-producto-comerciante.component.css']
})
export class AgregarProductoComercianteComponent implements OnInit {

  nombre: string;

  productoNuevo: string;
  descripcionNueva: string;

  constructor(private comercianteService: ComercianteService, public sesionComerciante: SesionComercianteService, private router: Router) { }

  ngOnInit() {
    this.nombre = this.sesionComerciante.nombre;
  }

  enviarProducto() {
    if (this.productoNuevo != undefined || this.descripcionNueva != undefined) {
      var json = {
        comerciante: this.sesionComerciante.email,
        nombre: this.productoNuevo,
        descripcion: this.descripcionNueva
      }
      console.log(json)
      this.comercianteService.agregarProductoInventario(json).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/comerciante/verInventario');
      })
    }
  }

}
