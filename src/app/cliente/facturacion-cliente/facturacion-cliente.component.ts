import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-facturacion-cliente',
  templateUrl: './facturacion-cliente.component.html',
  styleUrls: ['./facturacion-cliente.component.css']
})
export class FacturacionClienteComponent implements OnInit {

  public itemes: any;
  public subtotal: any;
  public cargoEnvio: any;
  public cargoServicio: any;
  public total: any;

  constructor(public carritoService: CarritoService) { }

  ngOnInit() {
    this.getItemes();
    this.calcularMontos();
    this.registrarPedido();
  }

  private registrarPedido() {

  }

  private getItemes() {
    this.itemes = this.carritoService.productos;
  }

  private calcularMontos() {
    this.subtotal = 0;
    this.total = 0;
    for (let i = 0; i < this.carritoService.productos.length; i++) {
      this.subtotal += this.carritoService.productos[i].montokg;
    }

    this.total += this.subtotal;
    if (this.carritoService.direccion != undefined) {
      this.cargoEnvio = this.subtotal * 0.04;
      this.total += this.cargoEnvio;
    }

    this.cargoServicio = this.subtotal * 0.04;
    this.total += this.cargoServicio;

  }

}
