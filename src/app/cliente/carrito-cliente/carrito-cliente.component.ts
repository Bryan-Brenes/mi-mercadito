import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-cliente',
  templateUrl: './carrito-cliente.component.html',
  styleUrls: ['./carrito-cliente.component.css']
})
export class CarritoClienteComponent implements OnInit {

  total: any;
  direccion: string;
  requiereDireccion: boolean;

  constructor(public carritoService: CarritoService, private router: Router) { }

  ngOnInit() {
    this.calcularCosto();
  }

  public calcularCosto() {
    this.total = 0;
    for (let i = 0; i < this.carritoService.productos.length; i++) {
      this.total += this.carritoService.productos[i].montokg;

    }
  }

  public comprar() {
    if (this.carritoService.productos.length == 0) {
      return;
    }

    if (this.direccion != undefined) {
      this.carritoService.direccion = this.direccion;
    }

    this.router.navigateByUrl('/cliente/metodoPago')

  }

}
