import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-cliente',
  templateUrl: './pago-cliente.component.html',
  styleUrls: ['./pago-cliente.component.css']
})
export class PagoClienteComponent implements OnInit {

  aniosExpiracion: number[];

  nombreTarjeta: string;
  numeroTarjeta: string;
  mesExpiracion: string;
  anioExpiracion: string;
  cvv: string;

  constructor(private carritoService: CarritoService, private router: Router) { }

  ngOnInit() {
    this.aniosExpiracion = this.obtenerAnios();
    console.log(this.aniosExpiracion)
  }

  private obtenerAnios(): number[] {
    var anios: number[] = [];
    var anioActual = new Date();
    for (let i = anioActual.getFullYear(); i < anioActual.getFullYear() + 10; i++) {
      anios.push(i);
    }
    return anios;
  }

  public pagar() {
    if (this.nombreTarjeta != undefined &&
      this.numeroTarjeta != undefined &&
      this.mesExpiracion != undefined &&
      this.anioExpiracion != undefined &&
      this.cvv != undefined) {
      var json = {
        nombreTarjeta: this.nombreTarjeta,
        numeroTarjeta: this.numeroTarjeta,
        mesExpiracion: this.mesExpiracion,
        anioExpiracion: this.anioExpiracion,
        cvv: this.cvv
      }
      this.carritoService.informacionTarjeta = json;
      this.router.navigateByUrl('/cliente/facturacion')
    }

  }
}
