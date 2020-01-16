import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago-cliente',
  templateUrl: './pago-cliente.component.html',
  styleUrls: ['./pago-cliente.component.css']
})
export class PagoClienteComponent implements OnInit {

  aniosExpiracion: number[];

  constructor() { }

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
}
