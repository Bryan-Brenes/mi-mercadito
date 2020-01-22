import { Component, OnInit, Input } from '@angular/core';
import { ComercianteService } from 'src/app/servicios/comerciante.service';
import { SesionComercianteService } from 'src/app/servicios/sesion-comerciante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {

  @Input() nombre: string;
  @Input() cantidad: string;
  @Input() montoxKg: string;
  @Input() montoxUnidad: string;
  @Input() boton: string;
  @Input() id: string;
  @Input() ruta: string;

  constructor(private comercianteService: ComercianteService, public sesionComerciante: SesionComercianteService, private router: Router) { }

  ngOnInit() {
  }

  eliminarProducto() {
    console.log(this.id);
    //this.comercianteService.eliminarProductoFeria(this.sesionComerciante.email, id)
  }

}
