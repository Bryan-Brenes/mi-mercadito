import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-compra-cliente',
  templateUrl: './detalle-compra-cliente.component.html',
  styleUrls: ['./detalle-compra-cliente.component.css']
})
export class DetalleCompraClienteComponent implements OnInit {

  public itemes: any;
  public total: any;
  public subtotal: any;
  public cargoEnvio: any;
  public cargoServicio: any;

  constructor(private clienteService: ClienteService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.getItemes();

  }

  private getItemes() {
    var id = this.routes.snapshot.paramMap.get('id');
    this.clienteService.obtenerDetallePedido(id).subscribe(data => {
      var dato = JSON.parse(JSON.stringify(data));
      this.itemes = dato;
      this.calcularMontos();
    })
  }

  private calcularMontos() {
    this.subtotal = 0;
    this.total = 0;
    for (let i = 0; i < this.itemes.length; i++) {
      this.subtotal += this.itemes[i].monto;
    }

    this.total += this.subtotal;
    if (this.itemes.direccion != undefined) {
      this.cargoEnvio = this.subtotal * 0.04;
      this.total += this.cargoEnvio;
    }

    this.cargoServicio = this.subtotal * 0.04;
    this.total += this.cargoServicio;

  }

}
